import {
  describe,
  test,
  beforeAll,
  afterAll,
  beforeEach,
  expect,
} from "vitest";
import { setActivePinia, createPinia } from "pinia";
import useMoviesStore from "../useMoviesStore";
import handlers from "../../helpers/mocks/handlers";
import { setupServer } from "msw/node";

const server = setupServer(...handlers);

describe("useMovieStore", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("fetchMovies should fetch movies", async () => {
    const store = useMoviesStore();
    expect(store.moviesFiltered.length).toBe(0);

    await store.fetchMovies();
    expect(store.moviesFiltered.length).toBe(3);
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

  test("all filters must be applied", async () => {
    const store = useMoviesStore();

    await store.fetchMovies();

    store.changeSearchBy("gengre");
    store.changeSearch("Crime");
    store.changeSortBy("rating");

    expect(store.moviesFiltered.length).toBe(2);
  });
});
