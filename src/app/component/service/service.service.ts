import { Todo } from "src/app/interface/todo";

export let arrayValori2: Todo[] = [];
export let completati: Todo[] = [];

export function get(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(arrayValori2);
    });
  });
}
export function get2(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(completati);
    }, 2000);
  });
}

export function aggiungi(ele: Todo, i: number): Promise<Todo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      completati.push(ele);
      ele.completed = true;
      res(ele)
    }, 2000)
  })


}





