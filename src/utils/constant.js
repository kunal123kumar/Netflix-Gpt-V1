const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjJhYjdmMWE1NzllYzg2OWIyODVjZDhjMWQxNzNiNSIsIm5iZiI6MTc1ODM0NzYzOC4yNDcsInN1YiI6IjY4Y2U0MTc2ZWVmMmYyZGFhMGNkNmVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N1Dsc_DYmG7zpEqvr96x4ezW6AvUCjhnh9p79UUDhK4",
  },
};
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w400";

const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
const OPENAI_KEY ="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"
export { API_OPTIONS, IMG_BASE_URL, SUPPORTED_LANGUAGES, OPENAI_KEY };