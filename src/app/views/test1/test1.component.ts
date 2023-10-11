import { Component } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { ShoppingItem } from 'src/app/models/shopping-item';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component {
  items$: Observable<ShoppingItem[]> = of([
    { id: 1, name: 'Book', icon: 'pi pi-book', price: 70 },
    { id: 2, name: 'Camera', icon: 'pi pi-camera', price: 770 },
    { id: 3, name: 'Tablet', icon: 'pi pi-tablet', price: 532 },
    { id: 4, name: 'Pencil', icon: 'pi pi-pencil', price: 1 },
    { id: 5, name: 'Ticket', icon: 'pi pi-ticket', price: 50 },
    { id: 6, name: 'Car', icon: 'pi pi-car', price: 30000 },
  ]);

  selectedItems$ = new BehaviorSubject<ShoppingItem[]>([]);

  total$ = this.selectedItems$.pipe(
    map((i) => i.map((x) => x.price).reduce((prev, curr) => prev + curr, 0))
  );

  cartSize$ = this.selectedItems$.pipe(
    map(i => i.length)
  )

  addItem(item: ShoppingItem): void {
    const previousValues = this.selectedItems$.getValue();

    // since we might have similar ID to what was previously defined in items$,
    // we need to generate a new ID for this item
    const itemWithUpdatedId: ShoppingItem = { ...item, id: Date.now() }

    this.selectedItems$.next([...previousValues, itemWithUpdatedId])
  }

  removeItem(itemId: number): void {
    this.selectedItems$.next(this.selectedItems$.getValue().filter(x => x.id !== itemId))
  }

  cleanCart(): void {
    this.selectedItems$.next([])
  }
}
