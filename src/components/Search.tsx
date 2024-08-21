import Autosuggest from "react-autosuggest";

import { TPet } from "@/types";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { escapeRegexCharacters } from "@/utils";

interface IProps {
  data: TPet[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Search: FC<IProps> = ({ data, value, setValue }) => {
  const [options, setOptions] = useState(data);

  const onSearch = ({ value }: { value: string }) => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      setOptions([]);
      return;
    }

    setOptions(
      data.filter((e) =>
        e.breeds[0].name
          .toLocaleLowerCase()
          .includes(escapedValue.toLocaleLowerCase())
      )
    );
  };

  return (
    <div className="flex justify-center mb-3 relative">
      <Autosuggest
        suggestions={options}
        getSuggestionValue={(suggestion) => suggestion.breeds[0].name}
        onSuggestionsFetchRequested={onSearch}
        renderSuggestion={(suggestion) => (
          <span>{suggestion.breeds[0].name}</span>
        )}
        inputProps={{
          value,
          placeholder: "Search",
          onChange: (e, { newValue }) => setValue(newValue),
          className: "px-4 py-2 rounded-md",
        }}
      />
    </div>
  );
};
