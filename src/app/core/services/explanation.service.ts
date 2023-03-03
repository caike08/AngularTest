import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExplanationService {
  private _tests = [
    {
      url: '/home/test1',
      text: '<h4>Test 1 - Debugging a feature</h4><p>For this test, you must try to find all 6 bugs in this e-commerce cart component and fix them. These are the requested feature for the component to be approved:</p><li>When I click in an item, it must be added to the cart</li><li>The cart must display all added items, with their names and prices</li><li>There should be displayed the correct total price above the cart with the currency R$</li><li>There should be displayed the total quantity of items above the cart</li><li>The individual delete button must remove the clicked item from the cart</li><li>The clean button should delete all items from the cart</li>',
    },
    {
      url: '/home/test2',
      text: "<h4>Test 2 - Retrieving and displaying information</h4><p>For this test, you must retrieve from an API a list of users and display them in a table.</p><li>The HTTP GET request must be made in a service</li><li>The table should contain user's name and id</li><li>The table must be displayed in ascending order by name</li><li>No need to worry about styling the component's layout</li><li>The API url is inside the environment.ts file</li>",
    },
  ];

  constructor() {}

  getExplanation(url: string): string {
    const text = this._tests.find((x) => x.url === url);
    return !!text ? text.text : '';
  }
}
