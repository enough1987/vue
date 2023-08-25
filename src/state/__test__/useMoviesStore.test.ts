import { describe, test, beforeEach, expect } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import useMoviesStore from "../useMoviesStore";

describe("useMovieStore", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  test("fetchMovies should fetch movies", () => {
    const store = useMoviesStore();
    expect(store.moviesFiltered.length).toBe(0);

    store.fetchMovies();
    expect(store.moviesFiltered.length).toBe(10);
  });

  test("changeSearch should change search filter", () => {
    const store = useMoviesStore();

    expect(store.search).toBe("");

    store.changeSearch("test");
    expect(store.search).toBe("test");
  });

  test("changeSearchBy should change searchBy filter", () => {
    const store = useMoviesStore();

    expect(store.searchBy).toBe("name");

    store.changeSearchBy("gengre");
    expect(store.searchBy).toBe("gengre");
  });

  test("changeSortBy should change sortBy filter", () => {
    const store = useMoviesStore();

    expect(store.sortBy).toBe("date");

    store.changeSortBy("rating");
    expect(store.sortBy).toBe("rating");
  });

  test("all filters must be applied", () => {
    const store = useMoviesStore();

    store.fetchMovies();

    store.changeSearchBy("gengre");
    store.changeSearch("fiction");
    store.changeSortBy("rating");

    expect(store.moviesFiltered.length).toBe(4);
  });
});
