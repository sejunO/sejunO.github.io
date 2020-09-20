---
layout: post
title: "Lambda Expressions"
subtitle: "ㅅ"
date: 2020-09-15 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---

지금까지 학원에서 배운 내용은 모두 아는 내용이거나 배운 내용의 확장같은 느낌이었다. 대학에서 들은 자바 수업에 람다가 강의내용에 포함되는지는 모르지만 확실한건 난 처음본다.

### Lambda
- FunctionalInterface를 람다(익명 함수)를 이용하여 간결하게 구현할 수 있다.
- Java 8 부터 포함되어 있다.
- 익명함수를 생성하기 위한 식으로 객체 지향 언어보다 함수 지향 언어에 가깝다.
- 런타임 시에는 익명 구현 객체를 생성한다.
<br>

**람다식은 결국 로컬 익명 구현 객체를 생성하게 되지만, 인터페이스가 가지고 있는 메소드를 간편하게 구현해서 사용하는 것이 목적이다.**

### 람다의 장단점

#### 장점
1. 코드의 간결성: 불필요한 반복문의 삭제가 가능하며 복잡한 식을 단순하게 표현할 수 있다.
2. 지연연산 수행: 지연연산을 수행 함으로써 불필요한 연산을 최소화할 수있다.
3. 병렬처리 가능: 멀티쓰레드를 활용하여 병렬처리를 사용할 수 있다.

#### 단점
1. 단순 반목문 사용시 성능이 떨어진다.
2. 지나치게 사용하면 오히려 가독성을 떨어뜨릴 수 있다.
3. 재귀로 만들경우에는 부적합한면이 있다.

### 표현식
몇 가지 사용방법
1. 파라미터 -> body로 사용할 수 있다.
2. 파라미터가 하나일 경우 생략할 수 있다.
3. 단일 문장은 {}를 생략할 수 있다. return 문이라면 return도 생략한다.

```java
public class Lambda {
    interface Test {
        void test();
    }
    public static void main(String[] args) {
        Test test = () -> System.out.println("lambda");
    }
    test.test(); // lambda
}
```

```java
public class Lambda {
    interface Calculator {
        int compute(int a, int b);
    }
    public static void main(String[] args) {
        Calculator c1 = (a, b) -> a + b; // return 생략
        c1.compute(1, 2);
    }
}

