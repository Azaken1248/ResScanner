import '../stuff.css';

function Recruiter() {
  const leaderboard = [
    [
      'Adi',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'Rohan',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'Rohit',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'jakds',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'ajkd',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'Adi',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'Rohan',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'Rohit',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'jakds',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
    [
      'ajkd',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. \n Voluptates dicta consectetur amet architecto nesciunt molestiae eum, culpa totam necessitatibus enim atque a voluptatem ipsam.\n Commodi cumque sed, enim sint rem ratione praesentium tenetur possimus.\n Sit perspiciatis excepturi aperiam iure, exercitationem esse dolorem ut! Praesentium fugiat, deserunt maiores similique esse aut?',
    ],
  ];
  return (
    <>
      <div className="recruitermain">
        <table className="recruiter-leaderboard">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Data</th>
          </tr>
          {leaderboard.map((data, index) => (
            <tr>
              <td className="center">{index + 1}</td>
              <td className="center">{data[0]}</td>
              <td className="center">{data[1]}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Recruiter;
