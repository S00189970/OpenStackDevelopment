import { Injectable } from '@angular/core';
import { PeopleStore, PeopleState } from './people.store';
import { QueryEntity, Order, QueryConfig } from '@datorama/akita';

@QueryConfig({
  sortBy: 'lastname',
  sortByOrder: Order.DESC
})
@Injectable({
  providedIn: 'root'
})
export class PeopleQuery extends QueryEntity<PeopleState> {

  selectArePeopleLoaded$ = this.select(state => {
    console.log(state.arePeopleLoaded);
    return state.arePeopleLoaded;
  });

  constructor(protected override store: PeopleStore) {
    super(store);
  }
}
