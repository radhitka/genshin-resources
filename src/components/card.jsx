import './../App.css';

function Card(props) {
  return (
    <div>
      <a
        href="#!"
        className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex flex-wrap justify-center">
          <img src={props.imageUrl} alt="" />
        </div>
      </a>
    </div>
  );
}

export default Card;
