---
layout: post
title: "오버로딩과 오버라이딩"
subtitle: "자바에서 다형성을 지원하는 방법들"
date: 2020-08-12 19:00:00 +0900
background: '/img/posts/image0.jpeg'
---

전공 수업시간에 지겹도록 들었던 오버로딩과 오버라이딩을 다시 배웠다. 처음 배울 땐 왜 그렇게 헷갈렸는지 모르겠지만 다시 보니 어떤걸 헷갈려했는지 기억도 안난다.
질문을 받아 본 적은 없지만 면접 단골 질문이라고 하니 정확한 설명은 외워놓자.

### 오버로딩(Overloading)
---

파라미터의 형식은 다르지만 같은 기능을 수행하는 메서드에 대해 같은 이름을 부여함으로써 프로그래밍의 **일관성**을 제공하기 위한 문법

```java
class X {
    X() {
        System.out.println("기본 생성자");
    }
    X(int a) {
        System.out.println("int 생성자");
    }
    X(int a, String b) {
        System.out.println("String 생성자");
    }
}
```

당연하겠지만 오버로딩 사용에는 **조건**이 필요하다. 
1. **매개변수 타입이 달라야 한다.**
2. **매개변수 개수가 달라야 한다.**

사실 이 두가지를 이용하려고 오버로딩을 하는 것 일테니 개인적으로 조건이라고 하기에도 좀 그렇지만 둘 다 만족하지 않으면 오류가 발생한다.  


### 오버라이딩(Overriding)
---

부모로부터 상속 받은 메서드 중에서 자신(서브클래스)의 역할에 맞지 않는 메서드가 있다면, 자신(서브클래스)의 역할에 맞춰 상속받은 메서드를 **재정의**하여 프로그래밍의 **일관성**을 확보하는 문법

오버라이딩을 알기위해선 먼저 상속을 알아야 한다.

#### 상속과 오버라이드

기존에 만든 클래스를 자신의 코드처럼 사용하는 기법으로 보통 기존 코드를 손대지 않고 새 코드를 덧붙일 때 많이 사용한다.

``` java
public class X { // super class = parents class
    public void m() {
        System.out.println("super class m");
    }
}

public class Y extends X{ // sub class = child class
    @Override
    public void m {
        System.out.println("sub class m");
    }
}
```

sub class에서 내용을 변경해야 할 상황에서 사용할 수 있다. 오버라이딩 사용시에도 주의할 점이 있는데  메서드이름, 매개변수, 리턴타입이 같아야한다. 이건 당연한 얘기일 수 있다.<br>
그리고 **static 메서드는 Override를 허용하지 않는다.** 수업중에 될까? 라는 생각이 들어서 해봤는데 당연히 안되더라.

