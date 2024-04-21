import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import type { MatcherFunction } from "expect";
import { axe, toHaveNoViolations } from "jest-axe";

// eslint-disable-next-line no-undef
jest.mock("next/router", () => require("next-router-mock"))

// eslint-disable-next-line no-undef
expect.extend(toHaveNoViolations);
const toBeA11yWhenRendered: MatcherFunction = async (actual) => {
    const { container } = render(actual as any);
    const axeResult = await axe(container)
    return toHaveNoViolations.toHaveNoViolations(axeResult);
}
const toBeA11y: MatcherFunction = async (actual) => {
    const axeResult = await axe(actual as unknown as any);
    return toHaveNoViolations.toHaveNoViolations(axeResult);
}
// eslint-disable-next-line no-undef
expect.extend({
    toBeA11yWhenRendered,
    toBeA11y
})
declare global {
    // eslint-disable-next-line no-unused-vars
    namespace jest {
        // eslint-disable-next-line no-unused-vars
        interface Matchers<R> {
            toBeA11yWhenRendered(): R;
            toBeA11y(): R;
        }
    }
    

}

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))
