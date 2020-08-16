---
layout: post
title: "ArrayList"
subtitle: "java"
date: 2020-08-14 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---

java에서 컬렉션(Collection)이란 데이터의 집합, 그룹을 의미하며 JCF(Java Collections Framework)는 이러한 데이터, 자료구조인 컬렉션과 이를 구현하는 클래스를 정의하는 인터페이스를 제공한다.
Collection interface는 List, Set, Queue로 크게 3가지 상위 인터페이스로 분류할 수 있다. Map은 Collection interface를 상속받고 있지 않지만 Collection으로 분류된다. 

### ArrayList

크기가 고정되어 있는 배열을 개선한 resizable Array이다. 이제 배웠지만 java에서 가장 많이 사용되는 자료구조라고 한다. 당연히 사용법이 다르다. 그래서 학원에서 ArrayList의 기본적인 기능을 따라한 class를 작성했다.

따라하면서도 별로 어렵다고는 못 느꼈다. 천천히 생각하면 나도 할 수 있을 것 같은 느낌이었다.

#### ArrayList 사용하기

- java.util.ArrayList에 포함되어 있다.
- List의 Size를 초기화해줄 필요가 없다.

##### 데이터 추가하기 - add
- add 메서드는 두 가지 방식으로 사용할 수 있다.
    - boolean add(Object e)
    - void add(int index, Object e)
첫 번째 방식은 Element값만 넘기는 방식이다. 이 때는 List의 맨 마지막 위치에 데이터가 들어간다. 두 번째 방식은 추가할 Element 값과 데이터가 들어갈 인덱스를 지정할 수 있다.
```java
ArrayList list = new ArrayList();
list.add("a");
list.add("b");
list.add(2, "c");
list.add(3, "d");
```

#### 데이터 제거하기 - remove
- boolean remove(int index)
특정 index의 데이터를 제거할 수 있다.
```java
list.remove(1); //a,c,d
list.remove(0); //c,d
```

#### 데이터 출력하기 - get
- Object get(int index)
특정 index의 데이터를 출력한다.
```java
list.get(0); //c
list.get(1); //d
```

기본적인 기능들이고 조금만 생각하면 쉽게 사용할 수 있는 수준이다. 실습으로 ArrayList class의 기본기능을 따라한 MyArrayList를 만들어보았다.