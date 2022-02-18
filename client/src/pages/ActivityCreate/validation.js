export default function validateInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.difficulty) {
    errors.difficulty = "Difficulty is required";
  }

  if (!values.duration) {
    errors.duration = "Duration is required";
  }

  if (values.season.size === 0) {
    errors.season = "Season is required";
  }

  if (values.countries.size === 0) {
    errors.countries = "Countries is required";
  }

  return errors;
}
