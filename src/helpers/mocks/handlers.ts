import { API } from "../../constants";
import { rest } from "msw";

export default [
  rest.get(API.MOVIES, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          year: "1994",
          genres: ["Drama"],
          ratings: [
            8, 8, 6, 10, 2, 3, 4, 5, 4, 9, 3, 9, 6, 10, 4, 8, 10, 1, 2, 8, 1, 9,
            5, 4, 4, 2, 4, 6, 9, 10,
          ],
          poster:
            "MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
          contentRating: "15",
          duration: "PT142M",
          releaseDate: "1995-03-03",
          averageRating: 0,
          storyline:
            "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.                Written by\nJ-S-Golden",
          actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
          imdbRating: 9.3,
          posterurl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
          id: 1,
          title: "The Shawshank Redemption",
        },
        {
          year: "1972",
          genres: ["Crime"],
          ratings: [
            6, 10, 4, 10, 1, 3, 7, 2, 3, 3, 3, 4, 2, 5, 6, 9, 10, 8, 7, 4, 8, 9,
            9, 10, 4, 6, 2, 9, 7, 7,
          ],
          poster:
            "MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
          contentRating: "15",
          duration: "PT175M",
          releaseDate: "1972-09-27",
          averageRating: 0,
          storyline:
            "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\nJ. S. Golden",
          actors: ["Marlon Brando", "Al Pacino", "James Caan"],
          imdbRating: 9.2,
          posterurl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
          id: 2,
          title: "The Godfather",
        },
        {
          year: "1974",
          genres: ["Crime"],
          ratings: [
            2, 5, 1, 1, 8, 4, 2, 3, 10, 10, 4, 9, 8, 9, 7, 6, 6, 9, 9, 4, 1, 8,
            4, 5, 7, 7, 7, 1, 10, 6,
          ],
          poster:
            "MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
          contentRating: "15",
          duration: "PT202M",
          releaseDate: "1975-07-28",
          averageRating: 0,
          storyline:
            "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.                Written by\nKeith Loh <loh@sfu.ca>",
          actors: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
          imdbRating: 9,
          posterurl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,351,500_AL_.jpg",
          id: 3,
          title: "The Godfather: Part II",
        },
      ])
    );
  }),
];
