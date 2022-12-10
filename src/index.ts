import { forkJoin} from 'rxjs';
import {ajax} from "rxjs/ajax";
import {BITBUCKET, GITHUB} from "../config";

const requestObservable = (url) => ajax.getJSON(url);
const o =
    forkJoin({
      github: requestObservable(GITHUB),
      bitbucket: requestObservable(BITBUCKET),
    });


o.subscribe({
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})