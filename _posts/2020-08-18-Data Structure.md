---
layout: post
title: "data structure - 마무리"
subtitle: "java"
date: 2020-08-18 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---
자료구조는 프로그래밍에 있어서 가장 기초적인 학문이다. 효율적이고 안전하게 동작하기위한 프로그램의 기본 골격에 해당되며 부실한 기초는 수많은 오류로 이어질 것이다. 자료구조의 중요성은 익히 들어와서 알지만 실습수준까지 배운 나로써는 어디에 어떻게 골격이 되는지는 감이 잘 안온다. 오늘은 자료구조를 마무리해보자.

### Stack
역시나 열심히 그렸던 기억이 있다. 짧은 시간안에 많은걸 배워야하는 학원 특성상 기본적인 동작 구조만 배웠다. Stack을 가장 잘 설명하는 단어 **FILO** First In Last Out이다. 먼저 들어간 데이터가 제일 나중에 나온다. 

#### Stack 구현하기 0 - 클래스 정의
먼저 내가 구현해본 MyLinkedList를 상속받아 사용했다. java.util.stack에는 더 많은 기능이 있겠지만 push, pop, peek 세 가지 메서드만 정의해봤다.
```java
public class MyStack extends MyLinkedList {}
```

#### Stack 구현하기 1 - push
Stack은 값을 넣으면 차례로 쌓이는 구조이다.
```java
public Object push(Object item) {
    this.add(item);
    return item;
}
```
간단했다.

#### Stack 구현하기 2 - pop
Stack에서 값을 꺼낼 때는 맨 마지막에 들어간 값이 먼저 나온다.
```java
 public Object pop() {
  if (size() == 0) {
    throw new EmptyStackException();
    }
  return remove(size() - 1);
}
```
#### Stack 구현하기 3 - peek
```java
public Object peek() {

    return get(size() - 1);
}
```

### Queue
Queue를 가장 잘설명하는 단어 **FIFO** First In First Out이다. 먼저 들어간 데이터는 제일 먼저 나온다. Queue는 종류가 많은데 그 중에 ArrayBlockingQueue를 사용해서 실습했다. 그 중에서 offer, poll, peek 메서드만 정의해봤다.

#### Queue 구현하기 0 - 클래스 정의
Stack과 마찬가지로 MyLinkedList를 상속받아 정의했다.
```java
public class MyQueue extends MyLinkedList {}
```

#### Queue 구현하기 1 - offer
Queue는 Stack과 마찬가지로 값을 넣으면 차례로 쌓인다.
```java
public boolean offer(Object e) {    
    return add(e);
}
```

#### Queue 구현하기 2 - poll
Stack과 다르게 값을 꺼낼 때는 맨 처음으로 들어간 데이터가 꺼내진다.

```java
public Object poll() {
  if (this.size() == 0) {
    return null;
  }
  return this.remove(0);
}
```

#### Queue 구현하기 3 - peek
public Object peek() {
  return this.get(0);
}

여기까지가 며칠간 했던 자료구조 구현해보기이다. 생각보다는 쉬웠지만 혼자서 해보려고 할땐 엄두도 못냈던게 맞다. 구현해보면서 많이 배웠다. 조금 여유가 생길 때 혼자 Deque를 구현해보려고 한다.

### Iterator
자바의 컬렉션 프레임워크에서 컬렉션에 저장되어 있는 요소들을 읽어오는 방법을 표준화한 것이다.<br>
Iterator 메서드에는 hasNext(), next(), remove()가 있다.
- hasNext() : 읽어올 요소가 남아있는지 확인하는 메서드이다. 요소가 있으면 true, 없으면 false를 반환한다.
- next() : 다음 데이터를 반환한다.
- remove() : next()로 읽어온 요소를 삭제한다.

#### Collection interface
ArrayList를 공부할 때 잠깐 언급했듯이 크게 Set, List, Map로 구성된다.

- Set : 순서를 유지하지 않는 데이터 집합이다. 데이터의 중복을 허용하지 않고, HashSet, TreeSet 등이 있다.
- List : 순서를 유지하는 데이터의 집합이다. 데이터의 중복이 허용되고, ArrayList, LinkedList 등이 있다.
- Map : Key와 Value로 이루어진 데이터의 집합이다. 순서는 유지되지 않으며, 키는 중복을 허락하지 않는다. TreeMap, HashTable, HashMap등이 있다.