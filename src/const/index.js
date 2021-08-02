
export const drawerWidth = 240;

export let sidebarItem = [
  {
    id: 0,
    route: [{
      id: 1,
      link: "Inicio",
      path:"/"
    }
    ]
  },
  {
    id: 1,
    route: [
      {
        id: 1,
        link: "Peliculas",
        subitems: [
          {
            id: 1,
            link: "Todas Las Peliculas",
            path:"/movie"
          },
          {
            id: 2,
            link: "Peliculas Populares",
            path:"/movie/popular"
          },
          {
            id: 3,
            link: "Ultimos Estrenos",
            path:"/movie/top_rated"
          }
        ]
      },
    ]
  },
  {
    id: 2,
    route: [
      {
        id: 1,
        link: "Series",
        subitems: [
          {
            id: 1,
            link: "Todas Las Series",
            path: "/tv"
          },
          {
            id: 2,
            link: "Series Populares",
            path: "/tv/popular"
          },
          {
            id: 3,
            link: "Ultimos Estrenos",
            path: "/tv/top_rated"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    route: [
      {
        id: 1,
        link: "Generos",
        subitems: [
          {
            id: 1,
            link: "Algun genero",
            path: "genre/28"
          },
        ]
      },
    ]
  }
]


export const iconsSidebar = ["home", "laptop", "videocam", "format_list_bulleted"]
