import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export interface IMovie {
  year: string;
  genres: string[];
  ratings: number[];
  poster: string;
  contentRating: string;
  duration: string;
  releaseDate: string;
  averageRating: number;
  storyline: string;
  actors: string[];
  imdbRating: number;
  posterurl: string;
  id: number;
  title: string;
}
export type ISearchBy = "name" | "gengre";
export type ISortBy = "date" | "rating";

const useMoviesStore = defineStore("movie", () => {
  const movies = ref<IMovie[]>([]);
  const search = ref("");
  const searchBy = ref<ISearchBy>("name");
  const sortBy = ref<ISortBy>("date");

  const moviesFiltered = computed(() => {
    return movies.value
      .filter((movie) => {
        if (!search.value) return true;

        if (searchBy.value === "name") {
          return movie.title?.toLowerCase().includes(search.value);
        } else {
          return movie.genres.find((item) =>
            item?.toLowerCase().includes(search.value)
          );
        }
      })
      .sort((a, b) => {
        if (sortBy.value === "date") {
          const [year1, month1, day1] = a.releaseDate.split("-");
          const d1 = new Date();
          d1.setFullYear(+year1);
          d1.setMonth(+month1);
          d1.setDate(+day1);

          const [year2, month2, day2] = b.releaseDate.split("-");
          const d2 = new Date();
          d2.setFullYear(+year2);
          d2.setMonth(+month2);
          d2.setDate(+day2);

          return d1 > d2 ? -1 : 1;
        } else {
          return a.imdbRating > b.imdbRating ? -1 : 1;
        }
      });
  });

  function changeSearch(value: string) {
    search.value = value;
  }

  function changeSearchBy(value: ISearchBy) {
    searchBy.value = value;
  }

  function changeSortBy(value: ISortBy) {
    sortBy.value = value;
  }

  async function fetchMovies() {
    try {
      const response = await axios.get(
        "https://tame-erin-pike-toga.cyclic.app/movies"
      );

      movies.value = response.data || [];
    } catch (error) {
      console.error(error);
    }
  }

  return {
    search,
    searchBy,
    sortBy,
    moviesFiltered,
    changeSearch,
    changeSearchBy,
    changeSortBy,
    fetchMovies,
  };
});

export default useMoviesStore;
