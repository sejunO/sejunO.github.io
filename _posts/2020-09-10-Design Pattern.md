---
layout: post
title: "Design Patten"
subtitle: "아직 싱글이야"
date: 2020-09-10 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---

### Design Patten
---
디자인 패턴이란?
- 객체 지향 프로그래밍 설계에서 자주 발생하는 문제들을 피하기 위해 사용되는 패턴이다.
논문을 통해 제안되었고 23개의 패턴을 수록한 'GoF'로 유명세를 타게 되었다. 현재에는 수천여개의 패턴이 발표되어 있다.<br>
수업중에 강사님이 몇 가지를 알려주셔서 따로 정리했다.

#### Singleton
---
단 하나의 인스턴스를 생성해 사용하는 디자인 패턴이다.<br>
- 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 생성한 객체를 반환한다.
- 인스턴스가 필요할 때 기존 인스턴스를 사용하게 한다.
- 자바에선 생성자를 private으로 선언해서 생성 불가하게 하고 getInstance()로 받아 쓰기도 한다.

##### 싱글톤 패턴을 사용하는 이유
- 인스턴스가 절대적으로 한 개만 존재하는 것을 보증하고 싶을 경우 사용한다.
- 두 번째 호출부터는 객체 로딩 시간이 현저하게 줄어 성능이 좋아진다.

##### 싱글톤 패턴의 문제점
- 인스턴스가 너무 많은 일을 하거나 많은 데이터를 공유시킬 경우 다른 클래스의 인스턴스들 간에 결합도가 높아서 "개방-폐쇄 원칙"을 위배하게 된다.
- 멀티쓰레드환경에서 동기화처리를 안하면 인스턴스가 두 개 생성될 수 있다.
꼭 필요한 경우가 아니면 지양해야하지만 잘 쓰면 아주 좋다고 한다. 어렵겠지만 그래보자.
 - 개방-폐쇄 원칙 : 소프트웨어 객체는 확장에 대해 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다.

```java 

class Single {
    private static Single instance;

    private Single(){}
    // 1번째 방법
    public static void getInstance() {
        if (instance == null) {
            instance = new Single();
        }
        return instance;
    }
    // 2번째 방법
    private static class Holder {
        public static final Single INSTANCE = new Single();
    }

    public static Single getInstance() {
        return Holder.INSTANCE;
    }
}
```

#### Iterator
순서를 가진 데이터 집합에 대하여 순차적인 접근하는 방식을 통일하는 디자인 패턴이다.
- Iterator interface에 호출 규칙을 정의하고 컬렉션은 Iterator를 구현한다.

```java
Iterator<Object> iterator = collection.iterator();

while(iterator.hasNext()) {
    Object object = iterator.next();
    object.doSometing();
}