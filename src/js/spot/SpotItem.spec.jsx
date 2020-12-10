import React from "react";
import userEvent from "@testing-library/user-event";
import { build, fake } from "@jackfranklin/test-data-bot";
import { screen, render as rtlRender } from "@testing-library/react";

const buildSpotItem = build("SpotItem", {
    fields: {
        showDetails: true,
        isSelected: false,
        data: {
            image: fake((f) => f.random.image()),
            distance: fake((f) => `${f.random.number()} mi`),
            title: fake((f) => f.random.words()),
        },
    },
});

import SpotItem from "./SpotItem";

const render = ({ data = {}, ...props } = {}) =>
    rtlRender(<SpotItem data={data} {...props} />);

describe("<SpotItem />", () => {
    it("renders an empty spot when no data is provided", () => {
        render();

        expect(screen.getByRole("img")).toBeEmptyDOMElement();
        expect(screen.getByText("Details")).toBeInTheDocument();
        expect(screen.getByRole("heading")).toBeEmptyDOMElement();
    });
    it("hides the details button", () => {
        render(buildSpotItem({ overrides: { showDetails: false } }));

        expect(screen.queryByText("Details")).toBeNull;
    });

    it("renders as expected with data", () => {
        const spotItem = buildSpotItem();

        render(spotItem);

        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            spotItem.data.image
        );

        expect(screen.getByRole("heading")).toHaveTextContent(
            spotItem.data.title
        );

        expect(screen.getByText(spotItem.data.distance)).toBeInTheDocument();
    });

    // TODO: should we add a test for clicking the details button?
});
