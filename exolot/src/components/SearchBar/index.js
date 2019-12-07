import React from "react";
import DefaultStyle from './Styles';
import { InputGroup, FormControl} from "react-bootstrap";

const SearchPage = () => {
  return (
    <DefaultStyle>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    className="border-style "
                    />
                </InputGroup>
    </DefaultStyle>
  );
}

export default SearchPage;