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

### java.util.Arrays

Arrays 클래스는 배열을 다루기 위한 다양한 메서드가 포함되어 있다. 모든 메서드는 클래스 메서드(static method)이므로, 객체를 생성하지 않고 바로 사용할 수 있다.

#### copyOf()
전달받은 배열의 특정 길이만큼을 새로운 배열로 복사하여 반환한다.

#### copyOfRange()
배열을 복사할 범위를 정할 수 있다.
```java
Arrays.copyOf(원본 배열, 복사할 인덱스 개수);
Arrays.copyOfRange(원본 배열, 시작 인덱스, 마지막 인덱스);
int[] arr1 = {1, 2, 3, 4};
int[] arr2 = Arrays.copyOf(arr1,3); // 1, 2, 3
int[] arr3 = Arrays.copyOf(arr1,6); // 1, 2, 3, 4, 0, 0\
int[] arr4 = Arrays.copyOfRange(arr1, 2, 3); // 3, 4
```

### 그 외 메서드
배열을 사용할 때 유용한 메서드 몇가지를 배웠다.

#### System.arraycopy();
System클래스에 메서드이며 byte배열의 값을 자르거나 복사하기 위해 사용한다.
```java
System.arraycopy(src, srcPos, dest, destPos, length);
src - 원배열, srcPos - 소스 배열의 개시 위치, dest - 복사할 배열, destPos - 복사 배열내에 위치, length - 복사할 배열 인덱스 수
int[] arr1 = {1, 2, 3, 4, 5, 6};
int[] arr2 = new byte[5];
System.arraycopy(arr1, 0, arr2,0, 5); // 1, 2, 3, 4, 5
```

#### contains(), indexOf()
contains()는 대상 문자열에 특정 문자열이 포함되어 있는지 boolean값으로 반환해주는 함수이다. 비슷한 함수로 indexOf()가 있는데 contains와 다르게 문자의 위치를 반환한다. 공통점은 두 메서드 모두 equals로 확인하기때문에 인스턴스가 다르다면 false / -1을 반환한다.
```java
ArrayList list = new ArrayList();
list.add("aaa");
list.add("bbb");
System.out.println(list.contains("aaa")); // true
System.out.println(list.indexOf("bbb")); // 1
```
