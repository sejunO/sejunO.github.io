---
layout: post
title: "얕은 복사와 깊은 복사"
subtitle: "공익할 때가 생각나네"
date: 2020-08-13 19:30:00 +0900
background: '/img/posts/image0.jpeg'
---

복학 후 들었던 C++ 수업에서 얕은 복사와 깊은 복사에 대한 발표를 한 적이 있다. 당연히 그땐 이해를 못하고  줄줄이 외워서 발표했었다. 정말 신기한게 학교에서 배울 땐 이해안되고 헷갈리던 것들이 지금 다시 들으니 뭘 헷갈려해서 이해를 못했는지 모르겠다. 적절하게 사용하는건 다르겠지만 일단 이해는 했다.


### Clone
---
새로운 특정 클래스를 복제하여 새로운 인스턴스를 생성하려고 할 때 사용한다. clone을 사용하면 이전의 값은 보존되고, 변경하기 전의 값을 참고하는데 도움이 된다. clone은 단순히 객체의 값에 저장된 값을 복제할 뿐, **객체 안에 참조되는 객체를 복제하지는 않는다.** 

### 얕은 복사(Shallow Copy)
---
객체를 복사할 때, 해당 객체만 복사하여 새 객체를 생성한다. 복사된 객체의 인스턴스 변수는 원본 객체의 인스턴스 변수와 **같은 주소를 참조한다**는 것이다.

- 따라서 인스턴스 변수의 값이 변경되면 원본 객체 및 복사 객체의 인스턴스 변수 값은 같이 변경된다.

```java
static class car implements Cloneable {
    '''
    @Override
    public Car clone() throws CloneNotSupportedException {
        return (Car) super.clone();
    }
    '''
}
static class Engine implements Cloneable {
    '''
    @Override
    public Engine clone() throws CloneNotSupportedException {
        return (Engine) super.clone();
    }
    '''
}

public static void main(String[] args) throws Exception {
    Engine engine = new Engine(3000, 16);
    Car car = new Car("현대", "소나타", engine);
    Car car2 = car.clone(); // car2 = car;
    car.engine.cc = 2000; // car와 car2 객체의 engine.cc 값이 변경
    car2.engine.cc = 3000; // car와 car2 객체의 engine.cc 값이 변경
}
```

이처럼 얕은 복사는 객체의 참조값(주소값)을 복사하는 것이다.

### 깊은 복사(Deep Copy)

객체를 복사할 때, 해당 객체와 인스턴스 변수까지 복사한 객체까지 생성한다. 전부를 복사하여 새 주소에 담기 때문에 **참조를 공유하지 않는다**.

```java
static class car implements Cloneable {
    '''
    @Override
    public Car clone() throws CloneNotSupportedException {
        Car copy = (Car) super.clone();
        copy.engine = this.engine.clone(); //깊은 복사
        return copy;
    }
    '''
}
static class Engine implements Cloneable {
    '''
    @Override
    public Engine clone() throws CloneNotSupportedException {
        return (Engine) super.clone();
    }
    '''
}

public static void main(String[] args) throws Exception {
    Engine engine = new Engine(3000, 16);
    Car car = new Car("현대", "소나타", engine);
    Car car2 = car.clone(); // car2 = car; 과 다름.
    car.engine.cc = 2000; // car객체의 engine.cc 값이 변경
    car2.engine.cc = 3000; // car2객체의 engine.cc 값이 변경
}
```

이처럼 깊은 복사는 객체의 값을 복사하는 것이다.

포함하고 있는 하위 객체에 대한 복제를 수행하려면 이처럼 개발자가 직접 하위 객체를 복제하는 코드를 작성해야 한다.

- 복사를 하기 위해선(특히 깊은 복사) 객체는 Cloneable interface를 implement해야하고 clone 메서드를 오버라이드해야한다.
- clone을 지원하는 객체가 아닐 경우에는 별도로 clone이 되기위한 설정이 필요한데 다음에 알아보자...

얕은 복사와 깊은 복사는 분명히 다르게 동작하고 쓰임새도 다를 것이다. 후에 필요한 상황에 맞게 잘 사용해보자. 제발 

