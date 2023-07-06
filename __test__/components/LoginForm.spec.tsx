// spec -> 요구사항이 잘되는것을 파악하기 때문에 더 의미가 가까운듯

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/components/LoginForm";

describe("로그인 폼 구현", () => {
  it("ID/PW 인풋 창, 버튼 있는지 확인", () => {
    const { container } = render(<LoginForm />);
    const idInput = container.querySelector("#id");
    const pwInput = container.querySelector("#password");

    expect(idInput).toBeInTheDocument();
    expect(pwInput).toBeInTheDocument();
  });
});

// yarn test --watchAll