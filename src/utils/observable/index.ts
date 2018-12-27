import { IObservable, IObserver } from './types';

export class Observable implements IObservable {
    private observers = new Set<IObserver>();

    public addObserver(observer: IObserver) {
        this.observers.add(observer);
    }

    public deleteObserver(observer: IObserver) {
        this.observers.delete(observer);
    }

    public notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
