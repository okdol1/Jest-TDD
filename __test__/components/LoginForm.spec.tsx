// spec -> 요구사항이 잘되는것을 파악하기 때문에 더 의미가 가까운듯

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "@/components/LoginForm";

// describe 내가 뭘 구현할거냐

describe("로그인 폼 구현", () => {
  it("ID/PW 인풋 창, 버튼 있는지 확인", () => {
    render(<LoginForm />);

    // screen -> loginform 렌더 -> 렌더된곳에서 테스트할 수 있도록 받을 수 있음
    const inputElement = screen.getByRole('textbox')
    // expect 인자값을 검사해줌
    //toBeInTheDocument 도큐먼트 안에 있는지
    expect(inputElement).toBeInTheDocument()
  });
});

// yarn test --watchAll