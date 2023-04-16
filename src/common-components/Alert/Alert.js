import styled from 'styled-components';
import {
    BorderRadius,
    Colors,
    FontSizes,
    Spaces,
} from '../../shared/DesignTokens';

const colorMapper = {
    info: {
        color: Colors.GRAY_LIGHT,
        backgroundColor: Colors.GRAY_MEDIUM,
    },
    success: {
        color: Colors.NEUTRAL_WHITE,
        backgroundColor: Colors.GREEN,
    },
    error: {
        color: Colors.NEUTRAL_WHITE,
        backgroundColor: Colors.RED,
    },
};

export const Alert = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-radius: ${BorderRadius.ONE};
	color: ${(props) => colorMapper[props.type].color};
	background-color: ${(props) => colorMapper[props.type].backgroundColor};
	padding: ${(props) => props.small && Spaces.ONE} ${Spaces.ONE_HALF};
	font-size: ${(props) =>
    props.small ? FontSizes.ONE_QUARTER : FontSizes.TWO};
`;
