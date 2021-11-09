import React from "react";

import { Box } from "@chakra-ui/react";
import theme from "Constants/theme";

const Button = ({ sm, disabled, children, iconLeft, iconRight, secondary }) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      py={sm ? "9px" : "10px"}
      px={sm ? "16px" : "18px"}
      cursor="pointer"
      transition="0.15s ease-out"
      pointerEvents={disabled && "none"}
      borderWidth="1px"
      bg={
        disabled
          ? secondary
            ? theme.COLORS.content.white
            : theme.COLORS.content.outline
          : secondary
          ? theme.COLORS.primary.white
          : theme.COLORS.primary.main
      }
      borderColor={
        disabled
          ? theme.COLORS.content.outline
          : secondary
          ? theme.COLORS.content.outline
          : theme.COLORS.primary.main
      }
      color={
        disabled
          ? secondary
            ? theme.COLORS.content.outline
            : theme.COLORS.content.white
          : theme.COLORS.content.main
      }
      style={{
        ...theme.FONTS.body[sm ? "S1" : "P1"],
        fontWeight: "bold",
      }}
      //   rounded={theme.SIZES.rounded.lg}
      rounded="9999px"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: theme.SHADOWS[4],
      }}
      _active={{
        transform: "translateY(0)",
        boxShadow: "none",
      }}
    >
      {/* Left icon */}
      {iconLeft && (
        <Box display="inline-flex" alignItems="center" pr="8px">
          <i
            style={{ fontSize: sm ? 16 : 24 }}
            className={`icon-${iconLeft}`}
          />
        </Box>
      )}
      {children}
      {/* Right icon */}
      {iconRight && (
        <Box display="inline-flex" alignItems="center" pl="8px">
          <i
            style={{ fontSize: sm ? 16 : 24 }}
            className={`icon-${iconRight}`}
          />
        </Box>
      )}
    </Box>
  );
};

export default Button;
