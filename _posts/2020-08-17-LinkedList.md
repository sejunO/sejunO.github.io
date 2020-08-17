---
layout: post
title: "LinkedList"
subtitle: "java"
date: 2020-08-17 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---

학교 다닐 때 공부는 뒷전이었지만 재밌어했던 과목이 몇 개 있다. 그 중 하나가 자료구조였다. 가르친 교수님 특성상.. 그림으로 이해하는걸 굉장히 중요하게 생각하셨는데 그렇게 공부해서 그런지 요즘 배우는 List가 쉽다. 이번엔 연결리스트이다.

### LinkedList

ArrayList와 비교하여 불필요한 데이터의 복사가 없어 삽입, 삭제가 용이하지만 데이터 검색시에 처음부터 노드를 순회해야 하기 때문에 성능상 불리하다. 이중 연결리스트가 사실 제일 기억에 남지만 오늘 배운건 단순 연결리스트이다. ArrayList부터 List class를 구현하면서 공부하고 있다.

#### LinkedList 구현하기 - 노드 생성

```java
private Node first;
  private Node last;
  private int size;

  static class Node {
    private Object value;
    private Node next;

    public Node() {}
    public Node(Object value) {
      this.value = value;
    }
  }
  ```

#### LinkedList 구현하기 - add
  우선 add 메서드이다. 작성한 목록은 총 2가지로 add(int index), add(int index, Object e) 이다.
  ```java
   public boolean add(Object e) {
    Node node = new Node();
    node.value = e;

    if (first == null) {
      first = node;
    } else {
      last.next = node;
    }
    last = node;
    size++;
    return true;
  }
  ```
  list의 뒤쪽에 삽입하는 메서드이고 첫 Node는 first이면서 last이다. 새로운 Node는 last로 삽입된다.
```java
  public void add(int index, Object e) {
    if (index < 0 || index > this.size) {
      throw new IndexOutOfBoundsException("인덱스가 유효하지 않습니다.");
    }

    Node node = new Node(e);
    if (index == 0) {
      node.next = this.first;
      first = node;
      return;
    }
    Node cursor = this.first;
    for (int i = 0; i < index - 1; i++) {
      cursor = cursor.next;
    }

    node.next = cursor.next;
    cursor.next = node;

    if (index == this.size) {
      last = node;
    }
    size++;
  }
```
지정한 index에 삽입하는 메서드이다. 지정 인덱스의 앞 인덱스를 찾는 cursor Node를 이용했다. index - 1번째 Node의 next값은 새로운 Node가 되어야 하고 새로운 Node의 next값은 index번째의 Node가 되어야 한다. **현재 last 뒤에 추가할 때 새로운 Node를 last로 정의해주어야 한다.**

#### LinkedList 구현하기 - get

삽입한 값을 확인하려면 get메서드가 필요했다.

```java
public Object get(int index) {
    if (index < 0 || index >= this.size) {
      throw new IndexOutOfBoundsException("인덱스가 유효하지 않습니다.");
    }
    Node cursor = this.first;
    for (int i = 0; i < index; i++) {
      cursor = cursor.next;
    }
    return cursor.value;
  }
  ```
  자주 말하는 것 같지만 자바를 배울 때 예외처리가 어려웠다.. 지금은 간단해서 그런지 쉽게 따라 할 수 있다. index의 위치에 찾아가서 value만 반환해주면 되는 메서드라서 쉽게 따라할 수 있었다.

#### LinkedList 구현하기 - remove

값을 넣었으니 삭제도 해보자.

```java
public Object remove(int index) {
    if (index < 0 || index >= this.size) {
      throw new IndexOutOfBoundsException("인덱스가 유효하지 않습니다.");
    }
    size--;

    if (index == 0) {
      Node old = first;
      first = old.next;
      old.next = null;
      return old;
    }

    Node cursor = this.first;
    for (int i = 0; i < index - 1; i++) {
      cursor = cursor.next;
    }
    Node old = cursor.next;
    cursor.next = old.next;
    old.next = null;

    if (cursor.next == null) {
      last = cursor;
    }

    return old;
  }
  ```
  수업시간에 만들고 자습할 때 혼자 만들어 봤을 때 꽤 애를 먹었다. 그냥 해봐라 하면 쉬웠을 텐데 삭제 하는 Node의 next를 null로 만드는게 좀 고민하게 했다. 그리고 size를 줄일 때 위치 때문에도..

#### LinkedList 구현하기 - set

  마지막으로 set이다. 특정 index의 값을 원하는 값으로 바꾸는 메서드이다.

  ```java
  public Object set(int index, Object e) {
    if (index < 0 || index >= this.size) {
      throw new IndexOutOfBoundsException("인덱스가 유효하지 않습니다.");
    }
    Node cursor = this.first;
    for (int i = 0; i < index; i++) {
      cursor = cursor.next;
    }
    Object old = cursor.value;
    cursor.value = e;
    return old;
  }
``` 
구현하면서 처음엔 좀 고민했었는데 set 메서드를 구현할 때부턴 쉽게 했다.

#### LinkedList 구현하기 - toArray
컬렉션 형태로 있는 List들을 배열로 리턴한다.

```java
public Object[] toArray() {
    Object[] arr = new Object[this.size];
    Node cursor = first;
    int i = 0;

    while (cursor != null) {
      arr[i++] = cursor.value;
      cursor = cursor.next;
    }
    return arr;
  }
  ```
  아직 연습이 덜 된건지 조금만 달라져도 아예 감도 안잡힌다..고민을 좀 오래했다. 그래도 열심히 복습했다. 내일은 아마 queue, stack을 할 것 같다. 그림공부는 열심히 해서 구조는 잘 아는데 잘 구현할 수 있을까

