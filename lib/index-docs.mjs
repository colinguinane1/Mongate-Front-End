import {algoliasearch} from "algoliasearch"; // Correct import syntax

const client = algoliasearch("AF857F3PD4", "76c91a638322b31903cd1539d18d7bdc");

// Initialize the 'movies_index' index
const index = client.initIndex("movies_index");

// Fetch and index objects in Algolia
const processRecords = async () => {
  // Fetch dataset from the provided URL (JSON)
  const datasetRequest = await fetch(
    "https://dashboard.algolia.com/sample_datasets/movie.json"
  );
  const movies = await datasetRequest.json();

  // Index the data into the 'movies_index'
  await index.saveObjects(movies, { autoGenerateObjectIDIfNotExist: true });

  console.log("Successfully indexed objects!");
};

processRecords()
  .then(() => console.log("Objects have been successfully indexed!"))
  .catch((err) => console.error("Error indexing objects:", err));
