import { Anchor, createStyles, rem } from "@mantine/core";

export interface NavBarLinkProps {
    label: string;
    link: string;
}

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      textDecoration: "none",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

const NavBarLink = ({ label, link }: NavBarLinkProps): React.ReactElement => {
    const { classes } = useStyles();

    return (
      <Anchor<"a">
        href={link}
        key={label}
        className={classes.link}
        onClick={() => {
          console.log("click");
        }}
      >
        {label}
      </Anchor>
    );
};

export default NavBarLink