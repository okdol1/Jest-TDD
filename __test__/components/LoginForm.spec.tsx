// spec -> 요구사항이 잘되는것을 파악하기 때문에 더 의미가 가까운듯

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/components/LoginForm";

describe("로그인 폼 구현", () => {
  it("ID/PW 인풋 창, 버튼 있는지 확인", () => {
    const onSubmit = jest.fn();
    const { container } = render(<LoginForm onSubmit={onSubmit} />);
    const idInput = container.querySelector("#id");
    const pwInput = container.querySelector("#password");
    const button = container.querySelector("button");

    expect(idInput).toBeInTheDocument();
    expect(pwInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  // 테스트를 하기 위해서 테스터블하다(?) (테스트가 가능하지 않게 코드를 짬) -> 테스트를 하기위해 함수를 밖으로 빼서 써야함
  it("onSubmit 활용하기", () => {
    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };
    render(<LoginForm onSubmit={onsubmit} />);
  });
});

// yarn test --watchAll
