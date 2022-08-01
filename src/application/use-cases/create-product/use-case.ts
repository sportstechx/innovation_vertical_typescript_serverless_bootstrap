export interface UseCase<T> {
  execute(...args: never): Promise<T>
}
