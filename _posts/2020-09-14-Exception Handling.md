---
layout: post
title: "Exception Handling"
subtitle: "멈추지마"
date: 2020-09-14 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---

새로운 주제가 나올 때마다 대학 수업이 생각난다. 이제는 내가 이해를 못 한게 아니라 할 생각이 없던 것 같다.<br>

지금까지 프로젝트를 하면서 예외상황이 발생하면 프로그램이 작동을 멈췄다. 그래서 테스트가 너무 귀찮았고 잘 안했다. 사실 예외처리를 적용해도 안되는 부분을 되게하는건 아니라서 코드를 수정해야 하는건 똑같지만 기분이 안나쁘잖아..

### 예외처리
- 프로그램 실행 시 발생할 수 있는 예외에 대비하는 것으로 프로그램 비정상 종료를 막고 실행 상태를 유지하는 것이다.

#### 에러와 예외

- 에러(error) : 발생 시 수습할 수 없는 심각한 오류
    - 스택오버플로우, 메모리 부족
- 예외(exception) : 예외 처리를 통해 수습할 수 있는 덜 심각한 오류
    - 런타임 에러

#### try catch

```java
public class ExceptionEx {
    public static void main(String[] args) {
        try {
            //예외가 발생할 수 있는 문장
        } catch (Exception e) {
            //예외가 발생할 경우 처리하기 위한 문장
            System.out.printf("%s %s", e.getClass().e.getName(), e.getMessage);
        } finally {
            System.out.println("finally");
        }
    }
}
```
try 문에서 예외가 발생하면 catch (Exception)를 실행한다.<br>
finally 블록은 try catch 문을 종료하기 전에 무조건 실행한다. 반드시 실행해야 하는 작업이 있다면 finally문에 적는다. 보통 try 문에서 사용한 자원을 해제시키는 코드를 적는다.
