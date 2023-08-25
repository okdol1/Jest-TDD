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

    // 버튼 찾기
    const buttonElement = screen.getByRole("button");
    // fire 이벤트 사용 -> 버튼을 누를수 없기 때문에
    if (buttonElement) {
      fireEvent.click(buttonElement);
    }
    expect(buttonElement).toBeDisabled()
  });
});

// yarn test --watchAll

// 테스트 장점
// 1. 디버깅을 안함 -> 화면이랑 비교(디버깅 시간을 줄임)

// mockist vs classicist(목킹을 아예 안스는것)
// 프론트는 절대 classicist 될 수 없다
// mock이란 필요한 예시(가상)데이터를 만들어두는것

// 목킹을 지양할 수 없는이유 컴포넌트가 목킹을 필요할 수 밖에 없다(목킹을 할 수 밖에 없다)
// 목킹이 필요없는 컴포넌트가 잇음 버튼이라던가(동작하는 방법을 알 수 있으니까

// 변화에 유연하면서 안정성을 되찾는것 -> 그러나 두가지를 다 가져갈 수없음 -> 민석님은 안정성을 중시해야한다고 했음
// 목킹을 하면 타입이 바뀌게 되는데, id

// 우리가 요구사항을 테스트 -> 모킹할 수 밖에없음

// 목킹을 하는 이유, 테스트 자체적으로는 어디서든 반복가능하게(Repeatavle) 네트워크가 연결되ㅣ지 않아도 테스트가 가능하도록


// FEConf Korea - 프론트엔드에서 TDD가 가느

// TDD 왜 하는가
// 만능 아닙니다. 지뢰 탐지기다.
// TDD 를 잘하려면 좋은 설계, 좋은 설계를 잘하려면 TDD를 잘해야함
// 테스트 코드를 작성한다는것은 코드를 작게 설계한다는 것, 설계의 변경에서 가져오는 고통을 지금으로 가져오고 등등
// 장점: 요구사항을 명확하게 하는 습관을 갖게됨. 명세에 대해 자세히 생각하게 됨.
// 제일 중요한 것. 예제로 표현된 스펙. 이 컴포넌트를 어떻게 사용하는가에 대해 나오니까, 어떻게 컴포넌트나 함수를 사용할 수 있는지에 대한 예를 보여줌 Specification By Excample
