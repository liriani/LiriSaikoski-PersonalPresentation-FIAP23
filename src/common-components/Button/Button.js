import styled from "styled-components";
import {
    BorderRadius,
    Colors,
    FontFamilies,
    FontLetterSpacings,
    FontSizes,
    FontWeights,
    Spaces
} from "../../shared/DesignTokens";


export const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  font-family: ${FontFamilies.PRIMARY};
  font-weight: ${FontWeights.SEMI_BOLD};
  background-color: ${(props) =>
          props.ghost ? Colors.GRAY_DARK : Colors.GRAY_MEDIUM};
  color: ${Colors.NEUTRAL_WHITE};
  border-radius: ${BorderRadius.ONE};
  padding: ${Spaces.ONE} ${Spaces.TWO};
  cursor: pointer;
  transition: 200ms all ease;
  text-transform: none;
  letter-spacing: ${FontLetterSpacings.MEDIUM};
  font-size: ${FontSizes.ONE_QUARTER};

`