import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { DexieService } from './dexie.service';



export interface Todo {
  title: string;
}

export interface TodoWithID extends Todo {
  id: number;
}

@Injectable()
export class TodosService {
  table: Dexie.Table<TodoWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('timedDataStore');
  }

  getAll() {
    return this.table.toArray();
  }

  getWhere() {
    return this.table.where("id").between( 1,10000 ).toArray();
  }

  add(data:  any) {
    return this.table.add(data);
  }

  bulkAdd(data:  any[]) {
    return this.table.bulkPut(data);
  }

  update(id : number , data : any) {
    return this.table.update(id, data);
  }

  remove(id : number) {
    return this.table.delete(id);
  }

  clear() {
    return this.table.clear();
  }
}