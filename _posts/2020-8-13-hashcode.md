---
layout: post
title: "Object의 메서드"
subtitle: "toStirng, hashcode, equals"
date: 2020-08-13 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---

### Object

모든 클래스의 최상위 클래스 **"Object"**

일반적으로 생성하는 클래스는 컴파일러가 Object 하위 클래스로 설정한다.

즉, 자바 라이브러리나 유저가 만든 모든 클래스는 Object class를 부모클래스로 상속받아서 사용하게 된다.

### toString()

Object class의 메서드이다. 이 메서드는 객체가 가지고 있는 정보나 값들을 문자열로 만들어 리턴하는 메서드이다. 

- 보통 하위 클래스에서 toString을 Override하지 않고 사용하면 hashCode를 포함한 값이 출력된다.
- String class, File class에서는 toString을 Override하여 자신이 가진 값, 자신이 가진 해당 경로값을 리턴해준다.
- toString을 Override한다면 보통 인스턴스 내부 데이터를 문자열로 리턴해주는데 프로그램을 실행하는 중에 인스턴스 내부 값을 빠르게 확인하고 싶을 때 Override한다.
  - 현재 이클립스에서는 Alt + Shift + S + Generate toString 으로 쉽게 Override 할 수 있다.

### hashCode(디지털 지문)

hashcode()메서드(정확히는 Object class의 hashcode()메서드)는 각 객체에 대응되는 고유한 정수값을 리턴한다.

- java 홈페이지에서는 이 메서드는 Map컬렌션을 구현하는 HashTable, HashMap은 hashcode를 이용함으로써 객체를 저장하는 다른 도구들(예를 들면 ArrayList)에 비해 어떠한 장점을 갖게 된다. 는 내용이 있다.
- Key-Value 쌍으로 객체를 보관하는 도구인 HashTable과 HashMap은 Key의 hashcode를 통해 Value값을 더 쉽게 찾아낼 수 있다.

 Object class에서 정의된 hashcode메서드는 주소값과 연관이있다. 서로 다른 객체는 서로 다른 주소값을 갖기 때문에 다른 hashcode값을 갖는다. **하지만 String class에서 hashcode는 어떨까?**

String class에서는 hashcode() 메서드를 Overriding하여 같은 String객체에 대해(equals return값이 true) hashcode가 같아지게 했다. 따라서

```java
String a = "자바";
String b = new String("자바"); 
```

는 hashcode값이 같다.

### equals

```java
String st1 = "자바";
String str2 = new String("자바");
```

"자바"를 입력하여 2개의 문자열을 만들면 당연히 같은 객체이다. "안녕"과 "안녕"은 다르지않다. 위에서 말했듯이 당연히 hashcode값도 같다. equals 메서드도 String class에서 Overriding되어 있어서 이런 결과가 나온다.

```java
public class Member {
    private String name;
    private int age;
    public Member(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return this.name;
    }
    public int getAge() {
        return this.age;
    }
}
'''

Member member1 = new Member("오세준", 27);
Member member2 = new Member("오세준", 27);

member1.equals(member2); //false
```

Member class 특성상 위 두 객체는 같아야 한다. 나이가 아니라 주민번호라면 이름과 주민번호가 같으면 같은 사람으로 취급해야하는게 당연하다. 즉, 새롭게 정의한 클래스에서는 두 객체가 같은 객체임을 의미하는 equals메서드를 수정해야만 한다.

```java
    @Override
    public boolean equals(Object obj) {
      if (this == obj)
        return true;
      if (obj == null)
        return false;
      if (getClass() != obj.getClass())
        return false;
      Member other = (Member) obj;
      if (age != other.age)
        return false;
      if (name == null) {
        if (other.name != null)
          return false;
      } else if (!name.equals(other.name))
        return false;
      return true;
    }
```

toString 메서드와 마찬가지로 이클립스에서는 Alt + Shift + S + Generate 으로 쉽게 Override 할 수 있다. 이제 객체를 다시 생성하면 equals는 true일텐데 두 객체의 hashcode가 다르게 나온다. 아니 같은 객체인데 hashcode가 다르다니.. hashcode가 같아야만 hashcode가 의미를 가진다고 생각한다. 그래서 보통 equals와 hashcode는 같이 Override한다.

```java
    @Override
    public int hashCode() {
      final int prime = 31;
      int result = 1;
      result = prime * result + age;
      result = prime * result + ((name == null) ? 0 : name.hashCode());
      return result;
    }
```

equals 메서드에 의해 true가 나오는 두 객체의 hashcode가 같아야 hashcode가 의미를 가진다. 이것을 수업시간에 예제로 배운 HashSet에서 보면

- HashSet은 집합의 기능을 수행하여 중복 값을 저장하지 않는다.
- 객체에 대해 hashcode로 중복 여부를 검사하는데 같은 값을 가지더라도 hashcode가 다르면 다른 값으로 취급한다.
- 그래서 같은 데이터에 대해 hashcode는 같아야 한다.



> 그런데.. hashcode가 같으면 equals는 ture가 되어야 한다? 이건 또 아니래..

