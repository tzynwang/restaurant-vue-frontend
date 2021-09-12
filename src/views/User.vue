<template>
  <div class="container py-5">
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :followings="followings" />
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :comments="comments" />
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: false,
  },
  isAuthenticated: true,
};

const dummyData = {
  profile: {
    id: 2,
    name: "user1",
    email: "user1@example.com",
    password: "$2a$10$yVu0LNTtgpIx.ehwX6n/L.jJXKKnyE6AWdqsPdLV4.JvegiDZFtpK",
    isAdmin: false,
    image: null,
    createdAt: "2021-09-08T08:34:40.000Z",
    updatedAt: "2021-09-08T08:34:40.000Z",
    Comments: [
      {
        id: 10,
        text: "Voluptatem voluptatem consequuntur neque.",
        UserId: 2,
        RestaurantId: 10,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 10,
          name: "Ryder Hintz 588",
          tel: "(590) 232-2052",
          address: "188 Loraine Crescent",
          opening_hours: "08:00",
          description:
            "Corporis et tenetur inventore ipsam ex libero ab nihil cum. Aut molestias sed dignissimos repellendus et quam. Animi explicabo cupiditate accusamus cum eveniet facilis. Excepturi aut quo et nihil beatae praesentium ut et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=30.676668227125358",
          viewCounts: 186,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-12T08:49:52.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 13,
        text: "Consectetur atque sapiente officia doloremque qui fugiat.",
        UserId: 2,
        RestaurantId: 13,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 13,
          name: "Izabella Barrows",
          tel: "692.671.8299 x416",
          address: "45272 Jacey Stream",
          opening_hours: "08:00",
          description:
            "Et aut eius quae consequatur laborum soluta et.\nNisi aut voluptatem vel non at quas.\nCorrupti eum eum est aspernatur beatae soluta ea eos.\nHic qui eveniet voluptate temporibus voluptate sed.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=29.28907805634793",
          viewCounts: 2,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-11T03:48:32.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 18,
        text: "Dolorem et ut delectus.",
        UserId: 2,
        RestaurantId: 18,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 18,
          name: "Concepcion Bode",
          tel: "450-934-5004 x5179",
          address: "57460 Rempel Square",
          opening_hours: "08:00",
          description:
            "Neque animi repellendus dolorem repellat et veniam nostrum. Saepe non sint veritatis atque adipisci. Accusantium nulla numquam sint. Eum ratione commodi et ipsum ipsum non illum voluptas non. Occaecati qui recusandae quo qui voluptate itaque amet iste.\n \rVitae eveniet voluptate qui sunt. Rem voluptatem dicta consequuntur in. Veritatis fugit deleniti quisquam dolorum quasi officia odit.\n \rVoluptates corrupti illum ut. In laudantium possimus deleniti. Architecto qui et aut ipsa. Eum nostrum unde impedit. Quos excepturi occaecati sequi. Velit ea quo aut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=7.355597283564896",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 19,
        text:
          "Et corporis nihil tempore consequuntur quia repudiandae amet odit cupiditate.",
        UserId: 2,
        RestaurantId: 19,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 19,
          name: "Eve Corkery",
          tel: "633.665.7995 x7554",
          address: "592 Farrell Forge",
          opening_hours: "08:00",
          description:
            "Et ut sed nesciunt quia aspernatur. Laborum ut aut assumenda. Est doloribus accusamus.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=29.497026011014494",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 22,
        text: "Repudiandae illum assumenda accusantium nobis.",
        UserId: 2,
        RestaurantId: 22,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 22,
          name: "Jonas Schuster",
          tel: "561-540-1445 x82426",
          address: "2453 Candelario Squares",
          opening_hours: "08:00",
          description:
            "Nesciunt aliquam explicabo numquam et impedit.\nNemo sequi minus.\nMaxime quo quod doloremque voluptas est numquam et.\nVoluptas praesentium cumque eos veritatis sit.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=55.974307917826785",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 27,
        text: "Doloribus voluptatibus veritatis rerum.",
        UserId: 2,
        RestaurantId: 27,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 27,
          name: "Gail King",
          tel: "383.091.7337 x949",
          address: "8579 DuBuque Cliff",
          opening_hours: "08:00",
          description: "Quia tempore ut sed numquam repudiandae quo eum ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=88.39021831317639",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 29,
        text:
          "Non pariatur omnis quidem quo deserunt voluptatem quod architecto.",
        UserId: 2,
        RestaurantId: 29,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 29,
          name: "Janet Funk Sr.",
          tel: "549-540-3033 x98266",
          address: "5916 Delpha Trail",
          opening_hours: "08:00",
          description:
            "Dolor magnam aperiam corrupti ea illum. Aut libero quam qui quaerat doloremque. Inventore quos consequatur quae similique est sequi voluptatum. Nobis accusantium dignissimos architecto expedita nihil.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=19.28687910379687",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 30,
        text: "Maxime quis quia sed aut tenetur quos ab.",
        UserId: 2,
        RestaurantId: 30,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 30,
          name: "Thea Fisher",
          tel: "433-139-7256 x453",
          address: "1876 Howe Trail",
          opening_hours: "08:00",
          description:
            "Veritatis magni qui ab esse aut autem praesentium aut esse.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=59.42727518057118",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 40,
        text: "Atque sint occaecati.",
        UserId: 2,
        RestaurantId: 40,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 40,
          name: "Dr. Summer McGlynn",
          tel: "659-378-6805 x968",
          address: "00503 Spinka Plaza",
          opening_hours: "08:00",
          description:
            "Delectus soluta sapiente mollitia quidem commodi. Delectus commodi quaerat blanditiis distinctio impedit nulla culpa. Et vel veniam omnis ea aperiam aspernatur alias placeat quia. Aut a tenetur vel.\n \rPorro perferendis qui in velit sint nemo. Est qui expedita magni sed doloremque quasi consequatur vero. Voluptatem ipsum delectus incidunt qui iusto harum voluptatibus. Officiis eum saepe cupiditate vitae. Impedit ratione iusto adipisci hic.\n \rQuis enim qui corrupti non temporibus optio. Commodi incidunt est temporibus est illum qui culpa. Exercitationem sed nulla porro qui perferendis omnis omnis optio. Aliquid animi aspernatur dolorum consequatur sunt aut doloremque.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.60466135723951",
          viewCounts: 1,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T17:49:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 45,
        text: "Est accusamus eligendi omnis fuga amet repudiandae nisi enim.",
        UserId: 2,
        RestaurantId: 45,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 45,
          name: "Nicola O'Conner",
          tel: "1-292-358-5349 x78297",
          address: "80881 Dock Stravenue",
          opening_hours: "08:00",
          description:
            "Accusamus incidunt aut maxime perspiciatis repellat. Est quo sed beatae. A laborum accusamus maxime voluptas reiciendis. Tempora doloremque ipsa nesciunt. Sed expedita et sint. Omnis fugit reiciendis et totam aperiam.\n \rSint est voluptates. Tempora qui aspernatur. Exercitationem ut ea deserunt. Dolorem aliquid dolores sed voluptatem modi aspernatur iusto natus dignissimos. Et quos est. Fugit amet voluptas nesciunt.\n \rModi in nostrum soluta. Dolores nesciunt est. Quae consequatur eaque iste quia.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=86.56708704792217",
          viewCounts: 2,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-12T09:07:56.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 50,
        text: "Velit rerum nulla.",
        UserId: 2,
        RestaurantId: 50,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 50,
          name: "Mya Schroeder",
          tel: "1-120-152-2684 x769",
          address: "2314 Ortiz Circle",
          opening_hours: "08:00",
          description:
            "Rerum possimus qui maiores nesciunt facere rem et. Corporis tenetur nesciunt id voluptate et sunt. Fugit quae iste officia unde provident.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=93.82286216240476",
          viewCounts: 3,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T18:04:16.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 62,
        text: "Id aut omnis ut sit praesentium sint.",
        UserId: 2,
        RestaurantId: 12,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 12,
          name: "Diana Schaefer",
          tel: "(084) 787-1373 x725",
          address: "2059 Ledner Inlet",
          opening_hours: "08:00",
          description:
            "In repellat voluptas aut non qui. Voluptatem et architecto voluptas aliquid ut dolorem. Iusto doloribus dolores.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=64.54266428046233",
          viewCounts: 7494,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-11T09:12:44.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 67,
        text: "Quod natus quibusdam aut.",
        UserId: 2,
        RestaurantId: 17,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 17,
          name: "Kimberly Raynor",
          tel: "239-698-9774 x99353",
          address: "22299 Thompson Ferry",
          opening_hours: "08:00",
          description:
            "Alias sapiente est repellat.\nIpsa in temporibus reiciendis facere quis incidunt dicta.\nDucimus ex alias sit id ea.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=92.62853612461623",
          viewCounts: 6,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-11T03:54:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 68,
        text: "Earum ea quo ut amet id commodi.",
        UserId: 2,
        RestaurantId: 18,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 18,
          name: "Concepcion Bode",
          tel: "450-934-5004 x5179",
          address: "57460 Rempel Square",
          opening_hours: "08:00",
          description:
            "Neque animi repellendus dolorem repellat et veniam nostrum. Saepe non sint veritatis atque adipisci. Accusantium nulla numquam sint. Eum ratione commodi et ipsum ipsum non illum voluptas non. Occaecati qui recusandae quo qui voluptate itaque amet iste.\n \rVitae eveniet voluptate qui sunt. Rem voluptatem dicta consequuntur in. Veritatis fugit deleniti quisquam dolorum quasi officia odit.\n \rVoluptates corrupti illum ut. In laudantium possimus deleniti. Architecto qui et aut ipsa. Eum nostrum unde impedit. Quos excepturi occaecati sequi. Velit ea quo aut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=7.355597283564896",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 71,
        text: "Vitae vel unde esse ullam et nihil est.",
        UserId: 2,
        RestaurantId: 21,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 21,
          name: "Sabryna Greenfelder DVM",
          tel: "(054) 555-5788",
          address: "138 Darion Rest",
          opening_hours: "08:00",
          description:
            "Rem accusantium cupiditate ducimus. Culpa consequuntur aliquam atque ipsa cupiditate ut ipsa laudantium officiis. Ab sed similique dolorem ipsa nihil et possimus ea.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=4.293913510378133",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 72,
        text: "Nesciunt quia rerum quia tenetur.",
        UserId: 2,
        RestaurantId: 22,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 22,
          name: "Jonas Schuster",
          tel: "561-540-1445 x82426",
          address: "2453 Candelario Squares",
          opening_hours: "08:00",
          description:
            "Nesciunt aliquam explicabo numquam et impedit.\nNemo sequi minus.\nMaxime quo quod doloremque voluptas est numquam et.\nVoluptas praesentium cumque eos veritatis sit.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=55.974307917826785",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 75,
        text: "Id ratione ipsum qui quam voluptatibus sint.",
        UserId: 2,
        RestaurantId: 25,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 25,
          name: "Murl Kuhn",
          tel: "1-057-759-6459",
          address: "603 Assunta Motorway",
          opening_hours: "08:00",
          description:
            "Assumenda distinctio consectetur voluptas nam qui. Reiciendis quod officia. Aperiam pariatur sit incidunt voluptas ipsa. Et corrupti quis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=96.38157166637156",
          viewCounts: 7,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-12T09:40:19.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 77,
        text: "Doloremque est exercitationem corrupti labore nemo voluptatem.",
        UserId: 2,
        RestaurantId: 27,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 27,
          name: "Gail King",
          tel: "383.091.7337 x949",
          address: "8579 DuBuque Cliff",
          opening_hours: "08:00",
          description: "Quia tempore ut sed numquam repudiandae quo eum ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=88.39021831317639",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 80,
        text: "Enim esse omnis ut quos dolores.",
        UserId: 2,
        RestaurantId: 30,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 30,
          name: "Thea Fisher",
          tel: "433-139-7256 x453",
          address: "1876 Howe Trail",
          opening_hours: "08:00",
          description:
            "Veritatis magni qui ab esse aut autem praesentium aut esse.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=59.42727518057118",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 82,
        text: "Sunt consequatur possimus totam tempora dolor atque.",
        UserId: 2,
        RestaurantId: 32,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 32,
          name: "Dangelo Durgan",
          tel: "881-171-3938",
          address: "22570 Dale Islands",
          opening_hours: "08:00",
          description: "est",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.92255685612596",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 83,
        text: "Quidem voluptas a.",
        UserId: 2,
        RestaurantId: 33,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 33,
          name: "Constantin Tremblay",
          tel: "(668) 692-8297",
          address: "4630 Gust Circle",
          opening_hours: "08:00",
          description: "Earum fuga qui.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=48.4016035443505",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 86,
        text: "Alias neque neque quasi dolores aut in repellat.",
        UserId: 2,
        RestaurantId: 36,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 36,
          name: "Dudley Gutkowski",
          tel: "367.354.4166 x63253",
          address: "1436 Durgan Plains",
          opening_hours: "08:00",
          description: "neque recusandae est",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.4540502401645403",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 87,
        text: "Dolorum saepe eveniet at molestias unde delectus.",
        UserId: 2,
        RestaurantId: 37,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 37,
          name: "Dr. Ward Donnelly",
          tel: "779.224.5134 x929",
          address: "8461 Darlene Crescent",
          opening_hours: "08:00",
          description: "Et quia rerum consequuntur culpa a dignissimos.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=93.74019845236428",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 88,
        text: "Nam quis et.",
        UserId: 2,
        RestaurantId: 38,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 38,
          name: "Armani Heller",
          tel: "418-473-0081 x8178",
          address: "775 Bosco Port",
          opening_hours: "08:00",
          description:
            "Architecto aut quia unde necessitatibus accusantium quibusdam necessitatibus. Et debitis ut maxime. Aspernatur ipsum possimus aut esse nihil aut accusamus ducimus. Eveniet ut aut veniam. Qui impedit possimus atque non.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=34.27728373058103",
          viewCounts: 8,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-12T13:33:03.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 92,
        text: "Sed aperiam sit magnam facere dolorum.",
        UserId: 2,
        RestaurantId: 42,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 42,
          name: "Cristal Maggio",
          tel: "(767) 046-0314",
          address: "035 Reuben Course",
          opening_hours: "08:00",
          description:
            "Dolor et perspiciatis minus enim est aliquid repudiandae ipsum libero.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=37.526310877551296",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 96,
        text: "Non aut esse natus quia.",
        UserId: 2,
        RestaurantId: 46,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 46,
          name: "Julius Leffler",
          tel: "1-423-819-2267 x093",
          address: "3042 Lind Square",
          opening_hours: "08:00",
          description: "Optio deserunt esse sed et neque iure et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=20.181837576273587",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 98,
        text: "Earum necessitatibus molestiae.",
        UserId: 2,
        RestaurantId: 48,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 48,
          name: "Dorris Corkery",
          tel: "307-275-1941 x004",
          address: "233 Mable Court",
          opening_hours: "08:00",
          description:
            "Magnam deleniti soluta. Quis sapiente et recusandae ducimus voluptas. Quisquam consequatur est ratione et iusto dolore.\n \rEum animi eum et in dolore dolor. Nobis maiores dolores dicta iste odit hic. Illum molestias aut. Fuga dicta aliquid soluta et numquam aperiam. Animi quo omnis nemo quae sunt. Adipisci minima quod fugiat iure veritatis impedit.\n \rQuasi nihil qui. Dicta rem molestiae ipsam est. Vel labore dolores labore sit fugiat veritatis tempora ut. Quae tempora qui ratione sed sunt soluta omnis veritatis commodi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=54.79640118915488",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 99,
        text: "Quis hic accusamus.",
        UserId: 2,
        RestaurantId: 49,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 49,
          name: "Maribel Funk",
          tel: "(729) 391-7170 x454",
          address: "395 Allen Forest",
          opening_hours: "08:00",
          description: "quidem voluptatem unde",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=29.751212109278935",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 110,
        text: "Officiis delectus et et odio est quia rem.",
        UserId: 2,
        RestaurantId: 10,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 10,
          name: "Ryder Hintz 588",
          tel: "(590) 232-2052",
          address: "188 Loraine Crescent",
          opening_hours: "08:00",
          description:
            "Corporis et tenetur inventore ipsam ex libero ab nihil cum. Aut molestias sed dignissimos repellendus et quam. Animi explicabo cupiditate accusamus cum eveniet facilis. Excepturi aut quo et nihil beatae praesentium ut et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=30.676668227125358",
          viewCounts: 186,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-12T08:49:52.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 114,
        text: "Velit mollitia accusantium eaque reprehenderit nihil nesciunt.",
        UserId: 2,
        RestaurantId: 14,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 14,
          name: "Manuela Shanahan",
          tel: "1-046-033-0874",
          address: "1644 Lacy Fields",
          opening_hours: "08:00",
          description:
            "Inventore temporibus inventore architecto quia sed ipsum qui reiciendis eum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=21.157703558140327",
          viewCounts: 8,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-11T03:49:19.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 117,
        text:
          "Qui alias recusandae exercitationem incidunt ab quisquam consectetur minus optio.",
        UserId: 2,
        RestaurantId: 17,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 17,
          name: "Kimberly Raynor",
          tel: "239-698-9774 x99353",
          address: "22299 Thompson Ferry",
          opening_hours: "08:00",
          description:
            "Alias sapiente est repellat.\nIpsa in temporibus reiciendis facere quis incidunt dicta.\nDucimus ex alias sit id ea.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=92.62853612461623",
          viewCounts: 6,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-11T03:54:33.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 120,
        text: "Et tempore modi.",
        UserId: 2,
        RestaurantId: 20,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 20,
          name: "Jensen O'Kon",
          tel: "1-706-921-1414 x776",
          address: "1780 Krajcik Burgs",
          opening_hours: "08:00",
          description:
            "Et voluptas et eos illo iure libero et qui consequatur.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=35.94297313744428",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 123,
        text: "Possimus consequatur eaque in voluptates et.",
        UserId: 2,
        RestaurantId: 23,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 23,
          name: "Gerard Botsford",
          tel: "1-711-919-6385",
          address: "6664 Rex Club",
          opening_hours: "08:00",
          description:
            "Non dolorem numquam et recusandae vero vel mollitia. Rerum corrupti voluptas saepe doloribus deleniti non. Numquam ea eligendi vero et voluptatem et blanditiis et sed.\n \rVoluptas magnam qui dolores. Ex delectus non sit laudantium. Non voluptatum ea voluptatibus aspernatur a laboriosam accusantium quia. Iste voluptatem qui. Nobis nulla mollitia est odio incidunt et repellat qui. Ratione alias quia aut blanditiis quasi qui.\n \rDolor asperiores nihil quo magni. Sit qui praesentium voluptatem sint animi animi possimus ducimus. Voluptas sequi rerum dignissimos distinctio quaerat in.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=13.729192281707947",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 125,
        text: "Vero et sequi et error suscipit et nemo cumque sit.",
        UserId: 2,
        RestaurantId: 25,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 25,
          name: "Murl Kuhn",
          tel: "1-057-759-6459",
          address: "603 Assunta Motorway",
          opening_hours: "08:00",
          description:
            "Assumenda distinctio consectetur voluptas nam qui. Reiciendis quod officia. Aperiam pariatur sit incidunt voluptas ipsa. Et corrupti quis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=96.38157166637156",
          viewCounts: 7,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-12T09:40:19.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 129,
        text: "Id rerum ut qui facere inventore rem harum culpa tempore.",
        UserId: 2,
        RestaurantId: 29,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 29,
          name: "Janet Funk Sr.",
          tel: "549-540-3033 x98266",
          address: "5916 Delpha Trail",
          opening_hours: "08:00",
          description:
            "Dolor magnam aperiam corrupti ea illum. Aut libero quam qui quaerat doloremque. Inventore quos consequatur quae similique est sequi voluptatum. Nobis accusantium dignissimos architecto expedita nihil.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=19.28687910379687",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 132,
        text: "Cum nostrum porro vero quibusdam.",
        UserId: 2,
        RestaurantId: 32,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 32,
          name: "Dangelo Durgan",
          tel: "881-171-3938",
          address: "22570 Dale Islands",
          opening_hours: "08:00",
          description: "est",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.92255685612596",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 137,
        text: "Illo fuga quasi blanditiis laboriosam.",
        UserId: 2,
        RestaurantId: 37,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 37,
          name: "Dr. Ward Donnelly",
          tel: "779.224.5134 x929",
          address: "8461 Darlene Crescent",
          opening_hours: "08:00",
          description: "Et quia rerum consequuntur culpa a dignissimos.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=93.74019845236428",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 140,
        text: "Velit dolores aut cumque aut recusandae.",
        UserId: 2,
        RestaurantId: 40,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 40,
          name: "Dr. Summer McGlynn",
          tel: "659-378-6805 x968",
          address: "00503 Spinka Plaza",
          opening_hours: "08:00",
          description:
            "Delectus soluta sapiente mollitia quidem commodi. Delectus commodi quaerat blanditiis distinctio impedit nulla culpa. Et vel veniam omnis ea aperiam aspernatur alias placeat quia. Aut a tenetur vel.\n \rPorro perferendis qui in velit sint nemo. Est qui expedita magni sed doloremque quasi consequatur vero. Voluptatem ipsum delectus incidunt qui iusto harum voluptatibus. Officiis eum saepe cupiditate vitae. Impedit ratione iusto adipisci hic.\n \rQuis enim qui corrupti non temporibus optio. Commodi incidunt est temporibus est illum qui culpa. Exercitationem sed nulla porro qui perferendis omnis omnis optio. Aliquid animi aspernatur dolorum consequatur sunt aut doloremque.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.60466135723951",
          viewCounts: 1,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T17:49:20.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 143,
        text: "Non atque autem.",
        UserId: 2,
        RestaurantId: 43,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 43,
          name: "Veda Stoltenberg",
          tel: "682-756-4426 x163",
          address: "921 Jast Cliffs",
          opening_hours: "08:00",
          description:
            "Pariatur quae voluptatibus est voluptatem ullam totam assumenda rem. Aut et facilis qui laborum consequuntur quia. Cum debitis libero et nulla quod voluptates incidunt eligendi quis. Nemo sit illo possimus cumque. Ut nulla hic aperiam voluptatem sapiente dolorem occaecati tempora. Magni non non aut voluptatem ex fugit.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.14477105140149",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 149,
        text: "Dolores aliquam quia rem adipisci labore et ut placeat illo.",
        UserId: 2,
        RestaurantId: 49,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Restaurant: {
          id: 49,
          name: "Maribel Funk",
          tel: "(729) 391-7170 x454",
          address: "395 Allen Forest",
          opening_hours: "08:00",
          description: "quidem voluptatem unde",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=29.751212109278935",
          viewCounts: 0,
          createdAt: "2021-09-08T08:34:40.000Z",
          updatedAt: "2021-09-08T08:34:40.000Z",
          CategoryId: 4,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [
      {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$PM9K3ZslTQWzH3zTNX7JqOD9m5SmUR5eNfDRx6TV2Ujrbgr.7ie.a",
        isAdmin: true,
        image: null,
        createdAt: "2021-09-08T08:34:40.000Z",
        updatedAt: "2021-09-08T08:34:40.000Z",
        Followship: {
          followerId: 1,
          followingId: 2,
          createdAt: "2021-09-12T06:26:21.000Z",
          updatedAt: "2021-09-12T06:26:21.000Z",
        },
      },
    ],
    Followings: [],
  },
  isFollowed: true,
};

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      currentUser: dummyUser.currentUser,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { profile, isFollowed } = dummyData;
      const {
        id,
        image,
        name,
        email,
        Followings,
        Followers,
        Comments,
        FavoritedRestaurants,
      } = profile;

      const commentSet = new Set();
      // 過濾後端傳來的Comments
      this.comments = Comments.filter(
        (comment) =>
          comment.Restaurant &&
          !commentSet.has(comment.Restaurant.id) &&
          commentSet.add(comment.Restaurant.id)
      );

      this.user = {
        ...this.user,
        id,
        image,
        name,
        email,
        followingsLength: Followings.length,
        followersLength: Followers.length,
        commentsLength: this.comments.length,
        favoritedRestaurantsLength: FavoritedRestaurants.length,
      };

      this.isFollowed = isFollowed;
      this.followings = Followings;
      this.followers = Followers;
      this.favoritedRestaurants = FavoritedRestaurants;
    },
  },
};
</script>
