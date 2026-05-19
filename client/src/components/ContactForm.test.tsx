import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import ContactForm from "@/components/ContactForm";

describe("ContactForm", () => {
  const openSpy = vi.spyOn(window, "open");

  beforeEach(() => {
    openSpy.mockImplementation(() => null);
  });

  afterEach(() => {
    openSpy.mockReset();
  });

  it("shows validation errors for invalid input", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByText(/please enter your name\./i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/please enter a valid email address\./i)
    ).toBeInTheDocument();
  });

  it("opens the email client with a prefilled mailto link", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Syed Daniyal Haider");
    await user.type(screen.getByLabelText(/email/i), "daniyalhaider784@gmail.com");
    const projectTypeSelect = screen.getByRole("combobox", { name: /project type/i });
    await user.click(projectTypeSelect);
    await user.click(await screen.findByRole("option", { name: "AI Automation" }));
    await user.type(
      screen.getByLabelText(/message/i),
      "I would like to discuss an automation project."
    );

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy.mock.calls[0]?.[0]).toContain("mailto:daniyalhaider784@gmail.com");
    expect(openSpy.mock.calls[0]?.[0]).toContain("subject=Project%20Inquiry%20-%20AI%20Automation");
    expect(openSpy.mock.calls[0]?.[0]).toContain("I%20would%20like%20to%20discuss%20an%20automation%20project.");
  });
});
