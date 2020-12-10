import React from "react";
import userEvent from "@testing-library/user-event";
import { build, fake, perBuild } from "@jackfranklin/test-data-bot";
import { screen, render as rtlRender } from "@testing-library/react";

import SpotItem from "./SpotItem";

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
        render(
            buildSpotItem({ overrides: { showDetails: perBuild(() => false) } })
        );

        expect(screen.queryByText("Details")).toBeNull();
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

    it("calls the detail click handler when clicked", () => {
        const onDetailsClick = jest.fn((data) => data);
        const spotItem = buildSpotItem();

        render({ ...spotItem, onDetailsClick });

        expect(onDetailsClick).toHaveBeenCalledTimes(0);

        userEvent.click(screen.getByText("Details"));

        expect(onDetailsClick).toHaveBeenCalledWith(spotItem.data);
    });
});
