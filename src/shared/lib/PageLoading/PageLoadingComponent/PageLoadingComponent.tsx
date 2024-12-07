import { mobile_mediaQuery } from "@/shared/const/global";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  50% {
    transform: rotate(360deg) scale(0.7);
  }
`;

interface PageLoadingComponentProps {
  color?: string;
  speed?: string;
  size?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const LoadContainer: React.FC<PageLoadingComponentProps> = styled.div`
  width: ${(props: PageLoadingComponentProps) =>
    props.size === "small"
      ? mobile_mediaQuery.matches
        ? 20
        : 40
      : props.size === "large"
        ? 60
        : 50}px;
  height: ${(props: PageLoadingComponentProps) =>
    props.size === "small"
      ? mobile_mediaQuery.matches
        ? 20
        : 40
      : props.size === "large"
        ? 60
        : 50}px;
  position: relative;
  /* overflow: hidden; */
  > div:nth-child(1) {
    height: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 0
    );
    width: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 0
    );
    top: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 0
    );
    left: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 0
    );
    animation: ${rotate}
      ${(props: PageLoadingComponentProps) => props.speed || 2}s infinite;
    animation-delay: calc(
      ${(props: PageLoadingComponentProps) => props.speed || 2}s * 0.1 * 4
    );
    z-index: 5;
  }
  > div:nth-child(2) {
    height: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 1
    );
    width: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 1
    );
    top: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 1
    );
    left: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 1
    );
    animation: ${rotate}
      ${(props: PageLoadingComponentProps) => props.speed || 2}s infinite;
    animation-delay: calc(
      ${(props: PageLoadingComponentProps) => props.speed || 2}s * 0.1 * 3
    );
    z-index: 4;
  }
  > div:nth-child(3) {
    height: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 2
    );
    width: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 2
    );
    top: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 2
    );
    left: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 2
    );
    animation: ${rotate}
      ${(props: PageLoadingComponentProps) => props.speed || 2}s infinite;
    animation-delay: calc(
      ${(props: PageLoadingComponentProps) => props.speed || 2}s * 0.1 * 2
    );
    z-index: 3;
  }
  > div:nth-child(4) {
    height: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 3
    );
    width: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 3
    );
    top: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 3
    );
    left: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 3
    );
    animation: ${rotate}
      ${(props: PageLoadingComponentProps) => props.speed || 2}s infinite;
    animation-delay: calc(
      ${(props: PageLoadingComponentProps) => props.speed || 2}s * 0.1 * 1
    );
    z-index: 2;
  }
  > div:nth-child(5) {
    height: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 4
    );
    width: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px -
        ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.2 * 4
    );
    top: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 4
    );
    left: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.1 * 4
    );
    animation: ${rotate}
      ${(props: PageLoadingComponentProps) => props.speed || 2}s infinite;
    animation-delay: calc(
      ${(props: PageLoadingComponentProps) => props.speed || 2}s * 0.1 * 0
    );
    z-index: 1;
  }
`;

const HalfCircle: React.FC<PageLoadingComponentProps> = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  border: calc(
      ${(props: PageLoadingComponentProps) =>
          props.size === "small"
            ? mobile_mediaQuery.matches
              ? 20
              : 40
            : props.size === "large"
              ? 60
              : 50}px *
        0.05
    )
    solid transparent;
  border-top-color: ${(props: PageLoadingComponentProps) =>
    props.color || "#00adb5"};
  border-left-color: ${(props: PageLoadingComponentProps) =>
    props.color || "#00adb5"};
`;

export const PageLoadingComponent: React.FC<PageLoadingComponentProps> = ({
  style,
  color = "#fe4f74",
  speed,
  size = "default",
}) => {
  return (
    <LoadContainer
      style={{ zIndex: "var(--z-index-zero)", ...style }}
      speed={speed}
      size={size}
    >
      {Array.from(Array(5)).map((_, index) => (
        <HalfCircle color={color} speed={speed} size={size} key={index} />
      ))}
    </LoadContainer>
  );
};
PageLoadingComponent.displayName = "PageLoadingComponent";
