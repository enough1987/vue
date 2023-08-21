import { ref } from "vue";

export interface IMovie {
  url: string;
  name: string;
  gengre: string;
  year: number;
  rating: number;
}
export type ISearchBy = "name" | "gengre";
export type ISortBy = "date" | "rating";

const movies = ref<IMovie[]>([]);
const moviesFiltered = ref<IMovie[]>([]);
const search = ref("");
const searchBy = ref<ISearchBy>("name");
const sortBy = ref<ISortBy>("date");

export function useMovies() {
  function filterMovies() {
    return movies.value
      .filter((movie) => {
        return (
          !search.value ||
          movie[searchBy.value]?.toLowerCase().includes(search.value)
        );
      })
      .sort((a, b) => {
        if (sortBy.value === "date") return b.year - a.year;
        else {
          const x = a.name.toLowerCase();
          const y = b.name.toLowerCase();
          return x > y ? -1 : x > y ? 1 : 0;
        }
      });
  }

  function changeSearch(value: string) {
    search.value = value;
    moviesFiltered.value = filterMovies();
  }

  function changeSearchBy(value: ISearchBy) {
    searchBy.value = value;
    moviesFiltered.value = filterMovies();
  }

  function changeSortBy(value: ISortBy) {
    sortBy.value = value;
    moviesFiltered.value = filterMovies();
  }

  async function fetchMovies() {
    try {
      // TODO: use api
      const gengres = ["fiction", "action", "comedy", "drama"];
      const years = [2023, 2021, 2022, 2020];
      const ratings = [1, 2, 4, 3];
      const response = Array.from(Array(10).keys()).map((i) => ({
        url: "https://lumiere-a.akamaihd.net/v1/images/p_disney_elemental_homeent_v1_2292_0312c1d7.jpeg",
        name: "name" + i,
        gengre: gengres[i % 3],
        year: years[i % 3],
        rating: ratings[i % 3],
      }));
      movies.value = response || []; //.data;
      moviesFiltered.value = filterMovies();
    } catch (error) {
      console.error(error);
    }
  }

  return {
    changeSearch,
    changeSearchBy,
    changeSortBy,
    moviesFiltered,
    fetchMovies,
  };
}
