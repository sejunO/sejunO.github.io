---
layout: post
title: "SELECT"
subtitle: ""
date: 2020-10-26 16:00:00 +0900
background: '/img/posts/image0.jpeg'
---

꽤나 친숙한 SQL이다.  
그중에서 가장 기본인 SELECT구문 이다.
먼저 SQL 문은 대소문자 구분을 하지 않고 입력해도 수행되지만 원래는 구분한다.  
그래서 난 키워드 부분은 대문자로 입력한다.

### SELECT

가장 많이 사용되는 SELECT 구문 형식이다.


SELECT select_list [new_table]  
[FROM table or view] [WHERE search_condition]  
[GROUP BY group_by_expression]  
[HAVING search_condition]  
[ORDER BY order_expression [ ASC | DESC]]

#### SELECT .. FROM .. WHERE
가장 기본적이 형태이다.  

**SELECT select_list** [new_table]  
**[FROM table or view] [WHERE search_condition]**  
[GROUP BY group_by_expression]  
[HAVING search_condition]  
[ORDER BY order_expression [ ASC | DESC]]

**SELECT [컬럼]**
**FROM [테이블]**
**WHERE [조건]**  
- [컬럼]에 있는 컬럼에서 조건에 맞도록 데이터를 보여준다.
- 전체 열을 보고 싶다면 * 를 사용한다.
- WHERE 절에서 문자와 날짜를 조회할 경우는 반드시 ''(홑따옴표)로 감싸야한다.
- WHERE부분은 생략할 수 있다.

#### Column Alias
출력할 때 컬럼에 별명을 사용할 수 있는데 이 기능을 컬럼 별칭(Column Alias)라고 한다.  
이 기능을 쓰는 방법은 두 가지 인데  
- 컬럼 뒤에 공백을 주고 별명을 쓴다.
- 컬럼 뒤에 AS 키워드를 사용한 후 별명을 쓴다.
- 별명을 사용할 때 대소문자 구분이 필요할 경우에는 반드시 ""로 감싸준다.  

**SELECT [컬럼] "별명", [컬럼] AS "별명"**

#### Concatenation

서로 다른 컬럼을 마치 하나의 컬럼인 것처럼 연결해서 출력할 수 있는데 이 기능은 연산자(Concatenation)라고 한다.  
컬럼과 컬럼 사이에 || 기호를 사용하면 된다.  

**SELECT [컬럼] || [컬럼]**  
**SELECT [컬럼] |' '| [컬럼]**  
다음과 같이 공백을 줄 수 있는데 현업에서는 공백대신 다른 리터럴 문자를 넣어서 사용하는 경우가 아주 많다고 한다. 알아두자.

#### DISTINCT
출력할 때 중복된 값을 제거하고 출력할 수 있는데 DISTINCT 키워드를 사용하면 된다.

**SELECT DISTINCT [컬럼]**  
DISTINCT의 결과는 정렬이 되기도 하고 아닌 경우도 있는데, 오라클 9i 버전 까지는 정렬을 수행해서 속도 저하가 발생했으나 10g 버전부터 HASH 알고리즘을 사용하는 방식으로 변경되어서 정렬을 하지않는다.

#### SELECT .. [new_table] FROM .. WHERE
  
**SELECT select_list [new_table]**  
**[FROM table or view] [WHERE search_condition]**  
[GROUP BY group_by_expression]  
[HAVING search_condition]  
[ORDER BY order_expression [ ASC | DESC]]

여러가지 방법이 있겠지만 테이블의 컬럼 이외에 다른 컬럼을 출력할 수 있다.  
- **SELECT [컬럼], 'new_table'**  
- **SELECT [컬럼], [컬럼 +, -, *, /]***  
일반적인 산술 연산도 사용가능하다.

#### SELECT .. FROM .. WHERE .. ORDER BY
  
**SELECT select_list [new_table]**  
**[FROM table or view] [WHERE search_condition]**  
[GROUP BY group_by_expression]  
[HAVING search_condition]  
**[ORDER BY order_expression [ ASC | DESC]]**

출력 결과에 정렬이 필요한 경우 ORDER BY 절을 사용한다.  
정렬은 크게 오름차순과 내림차순 두 가지의 경우가 있으며 기본값은 오름차순이다.
- 오름차순은 ASC, 내림차순은 DESC로 표시한다.
- 날짜를 기준으로 정렬할 때 최근 날짜가 더 크다.  

**SELECT [컬럼1], [컬럼2], [컬럼3], [컬럼4] ...**  
**FROM.. WHERE..**  
**ORDER BY [컬럼2]**  
으로 사용할 수 있고 보통

**SELECT [컬럼1], [컬럼2], [컬럼3], [컬럼4] ...**  
**FROM.. WHERE..**  
**ORDER BY 2 DESC, 4 ASC**  
로 사용한다.
- ORDER BY 절에서 2는 SELECT절에서 2번째 위치한 컬럼, 4는 4번째 위치한 컬럼을 의미한다.
- 컬럼2를 기준으로 내림차순으로 먼저 정렬한 후 동일한 컬럼2 값이 있을 경우 컬럼4 값으로 오름차순으로 정렬한다.  

#### IS NULL / IS NOT NULL

대부분의 DBMS에서 사용되는 독특한 값이 NULL인데 이 값은 어떤 값인지 모른다는 의미이다.  
NULL값을 조회하기 위해서 '= NULL' 조건으로 검색하면 값을 조회하지 못한다.  
NULL값을 찾고 싶을 땐 **IS NULL**, NULL값이 아닌 모든값을 찾고 싶을 땐 **IS NOT NULL**을 사용하면 된다.

// HAVING, GROUP BY추가 예정














<!-- < HashMap과 HashTable의 차이 >

1. HashMap은 비동기, HashTable은 동기이다

- 단일 Thread에서는 HashMap이 멀티 Thread에서는 HashTable을 사용

● 단일 Thread에서 HashTable보다 HashMap의 성능이 더 좋음 : HashTable은 동기화를 위한 비용이 포함되기 때문

2. HashMap은 하나의 null key와 다수의 null value가 허용되지만, HashTable에서는 null을 불허

- HashTable은 객체를 저장하거나 불러올때 key가 hashCode 메소드와 equals 메소드를 사용하기 때문에 null을 불허 -->
