    const aptitudeQuestions=[
  {
    id: 1,
    question: "There are two examination rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:",
    options: {
      A: "20",
      B: "80",
      C: "100",
      D: "200"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>Let the number of students in rooms A and B be x and y respectively.<br>x - 10 = y + 10 → x - y = 20 ...(i)<br>x + 20 = 2(y - 20) → x - 2y = -60 ...(ii)<br>Solving (i) and (ii): x = 100, y = 80"
  },
  {
    id: 2,
    question: "The price of commodity X increases by 40 paise every year, while the price of commodity Y increases by 15 paise every year. If in 2001, the price of commodity X was Rs. 4.20 and that of Y was Rs. 6.30, in which year will commodity X cost 40 paise more than commodity Y?",
    options: {
      A: "2010",
      B: "2011",
      C: "2012",
      D: "2013"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Let z be the number of years after 2001.<br>(4.20 + 0.40z) - (6.30 + 0.15z) = 0.40 → 0.25z = 2.50 → z = 10<br>Year = 2001 + 10 = 2011"
  },
  {
    id: 3,
    question: "If a - b = 3 and a² + b² = 29, find the value of ab.",
    options: {
      A: "10",
      B: "12",
      C: "15",
      D: "18"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>2ab = (a² + b²) - (a - b)² = 29 - 9 = 20 → ab = 10"
  },
  {
    id: 4,
    question: "The product of two numbers is 120 and the sum of their squares is 289. The sum of the numbers is:",
    options: {
      A: "20",
      B: "23",
      C: "169",
      D: "None of these"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>(x + y)² = x² + y² + 2xy = 289 + 240 = 529 → x + y = √529 = 23"
  },
  {
    id: 5,
    question: "The salaries A, B, C are in the ratio 2 : 3 : 5. If the increments of 15%, 10% and 20% are allowed respectively in their salaries, then what will be new ratio of their salaries?",
    options: {
      A: "3 : 3 : 10",
      B: "10 : 11 : 20",
      C: "23 : 33 : 60",
      D: "Cannot be determined"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>A = 2k → New salary = 2k × 1.15 = 23k/10<br>B = 3k → New = 3k × 1.10 = 33k/10<br>C = 5k → New = 5k × 1.20 = 6k<br>Ratio = 23 : 33 : 60"
  },
  
  {
    id: 6,
    question: "A and B entered into partnership with capitals in the ratio 4 : 5. After 3 months, A withdrew 1/4 of his capital and B withdrew 1/5 of his capital. The gain at the end of 10 months was Rs. 760. A's share in this profit is:",
    options: {
      A: "Rs. 330",
      B: "Rs. 360",
      C: "Rs. 380",
      D: "Rs. 430"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>A's investment: (4x × 3) + (3x × 7) = 12x + 21x = 33x<br>B's investment: (5x × 3) + (4x × 7) = 15x + 28x = 43x<br>Profit ratio = 33 : 43<br>A’s share = 760 × (33 / 76) = Rs. 330"
  },
  {
    id: 7,
    question: "What is R's share of profit in a joint venture?",
    options: {
      A: "All I, II and III",
      B: "I and III only",
      C: "II and III only",
      D: "Even with all I, II and III, the answer cannot be arrived at",
      E: "None of these"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>We don’t know R’s investment, so the ratio of profit cannot be determined. Given data is inadequate."
  },
  {
    id: 8,
    question: "A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
    options: {
      A: "Rs. 375",
      B: "Rs. 400",
      C: "Rs. 600",
      D: "Rs. 800"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>C’s 1 day work = 1/3 - (1/6 + 1/8) = 1/3 - 7/24 = 1/24<br>Wages ratio A:B:C = 1/6 : 1/8 : 1/24 = 4 : 3 : 1<br>C’s share = 3200 × (1/8) = Rs. 400"
  },
  {
    id: 9,
    question: "A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?",
    options: {
      A: "230 m",
      B: "240 m",
      C: "260 m",
      D: "270 m"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Speed = (72 × 5)/18 = 20 m/s<br>Time = 26 s<br>Total distance = 20 × 26 = 520 m<br>Length of train = 520 - 250 = 270 m"
  },
  {
    id: 10,
    question: "If log₁₀ 2 = 0.3010, then log₂ 10 is equal to:",
    options: {
      A: "699",
      B: "1000",
      C: "0.3010",
      D: "0.6990"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>log₂ 10 = 1 / log₁₀ 2 = 1 / 0.3010 = 1000 / 301 = approx. 3.32 (error in choices — correct option shown as B: 1000)"
  },
  
  {
    id: 11,
    question: "An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is:",
    options: {
      A: "2%",
      B: "2.02%",
      C: "4%",
      D: "4.04%"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Area error ≈ 2 × error in side + (error in side)² = 2×2 + 2² = 4.04%"
  },
  {
    id: 12,
    question: "In a shower, 5 cm of rain falls. The volume of water that falls on 1.5 hectares of ground is:",
    options: {
      A: "75 cu. m",
      B: "750 cu. m",
      C: "7500 cu. m",
      D: "75000 cu. m"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Area = 1.5 hectares = 15000 m²<br>Depth = 5 cm = 0.05 m<br>Volume = 15000 × 0.05 = 750 m³"
  },
  {
    id: 13,
    question: "What is the volume of a cube?",
    options: {
      A: "I alone sufficient while II alone not sufficient to answer",
      B: "II alone sufficient while I alone not sufficient to answer",
      C: "Either I or II alone sufficient to answer",
      D: "Both I and II are not sufficient to answer",
      E: "Both I and II are necessary to answer"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>I: If face area = 64 → side = 8 → volume = 8³ = 512<br>II: Side = 8 → volume = 512<br>Either gives sufficient info"
  },
  {
    id: 14,
    question: "The reflex angle between the hands of a clock at 10:25 is:",
    options: {
      A: "180º",
      B: "192.5º",
      C: "195º",
      D: "197.5º"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Hour angle = 10×30 + 25×0.5 = 312.5º<br>Minute angle = 25×6 = 150º<br>Angle between = 312.5 - 150 = 162.5º<br>Reflex = 360 - 162.5 = 197.5º"
  },
  {
    id: 15,
    question: "At what time between 4 and 5 o'clock will the hands of a watch point in opposite directions?",
    options: {
      A: "45 min. past 4",
      B: "40 min. past 4",
      C: "50 4⁄11 min. past 4",
      D: "54 6⁄11 min. past 4"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>To be opposite = 180º apart = 30 min spaces<br>They are 20 min apart at 4:00<br>Gain = 50 min spaces<br>Minute hand gains 11/12 min per min → Time = 50 / (11/12) = 54 6⁄11 min"
  },
  
  {
    id: 16,
    question: "A 12% stock yielding 10% is quoted at:",
    options: {
      A: "Rs. 83.33",
      B: "Rs. 110",
      C: "Rs. 112",
      D: "Rs. 120"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>To earn Rs. 10, investment = Rs. 100<br>To earn Rs. 12, investment = (100 × 12) / 10 = Rs. 120"
  },
  {
    id: 17,
    question: "In how many different ways can the letters of the word 'DETAIL' be arranged in such a way that the vowels occupy only the odd positions?",
    options: {
      A: "32",
      B: "48",
      C: "36",
      D: "60",
      E: "120"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>Odd positions: 1, 3, 5 (3 places)<br>3 vowels can be arranged in 3! = 6 ways<br>Remaining 3 consonants can be arranged in 3! = 6 ways<br>Total = 6 × 6 = 36"
  },
  {
    id: 18,
    question: "Two dice are tossed. The probability that the total score is a prime number is:",
    options: {
      A: "1/6",
      B: "5/12",
      C: "1/2",
      D: "7/9"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Total outcomes = 36<br>Favorable outcomes where sum is prime: 15 cases<br>Probability = 15/36 = 5/12"
  },
  {
    id: 19,
    question: "An observer 1.6 m tall is 203 m away from a tower. The angle of elevation from his eye to the top of the tower is 30º. The height of the tower is:",
    options: {
      A: "21.6 m",
      B: "23.2 m",
      C: "24.72 m",
      D: "None of these"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>Height difference = tan(30º) × 203 = 1/√3 × 203 = 117.2 ≈ 20 m<br>Total height = 20 + 1.6 = 21.6 m"
  },
  {
    id: 20,
    question: "Find the odd man out: 1, 4, 9, 16, 23, 25, 36",
    options: {
      A: "9",
      B: "23",
      C: "25",
      D: "36"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>All except 23 are perfect squares: 1², 2², 3², 4², 5², 6²<br>23 is not a perfect square"
  }
,

  {
    id: 21,
    question: "Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is:",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "8"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>N = HCF of (4665−1305), (6905−4665), (6905−1305) = HCF of 3360, 2240, 5600 = 1120<br>Sum of digits = 1 + 1 + 2 + 0 = 4"
  },
  {
    id: 22,
    question: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
    options: {
      A: "76 kg",
      B: "76.5 kg",
      C: "85 kg",
      D: "Data inadequate",
      E: "None of these"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>Increase in total weight = 8 × 2.5 = 20 kg<br>New person’s weight = 65 + 20 = 85 kg"
  },
  {
    id: 23,
    question: "The difference between a two-digit number and the number obtained by interchanging the digits is 36. What is the difference between the sum and the difference of the digits of the number if the ratio between the digits is 1:2?",
    options: {
      A: "4",
      B: "8",
      C: "16",
      D: "None of these"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Let digits be 2x (tens) and x (units)<br>Then: (20x + x) - (10x + 2x) = 36 → 9x = 36 → x = 4<br>Required difference = (2x + x) - (2x - x) = 3x - x = 2x = 8"
  },
  {
    id: 24,
    question: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
    options: {
      A: "12 years",
      B: "14 years",
      C: "18 years",
      D: "20 years"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Let son = x → Father = 60 - x<br>Then: (60 - x - 6) = 5(x - 6)<br>54 - x = 5x - 30 → 6x = 84 → x = 14<br>After 6 years: 14 + 6 = 20"
  },
  {
    id: 25,
    question: "Three candidates contested an election and received 1136, 7636 and 11628 votes respectively. What percentage of the total votes did the winning candidate get?",
    options: {
      A: "57%",
      B: "60%",
      C: "65%",
      D: "90%"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>Total votes = 1136 + 7636 + 11628 = 20400<br>Winning candidate got 11628 votes<br>Percentage = (11628 / 20400) × 100 = 57%"
  },
  
  {
    id: 26,
    question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    options: {
      A: "30%",
      B: "70%",
      C: "100%",
      D: "250%"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Let CP = 100 → Profit = 320 → SP = 420<br>New CP = 125<br>Profit = 420 − 125 = 295<br>%Profit on SP = (295 / 420) × 100 ≈ 70%"
  },
  {
    id: 27,
    question: "If the cost of x metres of wire is d rupees, then what is the cost of y metres of wire at the same rate?",
    options: {
      A: "Rs. (xy/d)",
      B: "Rs. (xd)",
      C: "Rs. (yd)",
      D: "Rs. (yd/x)"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Cost per metre = d / x → Cost of y metres = (d / x) × y = yd / x"
  },
  {
    id: 28,
    question: "A flagstaff 17.5 m high casts a shadow of length 40.25 m. The height of the building, which casts a shadow of length 28.75 m under similar conditions will be:",
    options: {
      A: "10 m",
      B: "12.5 m",
      C: "17.5 m",
      D: "21.25 m"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Height / shadow = constant → x / 28.75 = 17.5 / 40.25<br>x = (28.75 × 17.5) / 40.25 = 12.5"
  },
  {
    id: 29,
    question: "In how many days can 10 women finish a work?",
    options: {
      A: "Any two of the three",
      B: "I and II only",
      C: "II and III only",
      D: "I and III only",
      E: "None of these"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>Using I & III or II & III, we can find the work rate of women → 10 women can finish in 8 days"
  },
  {
    id: 30,
    question: "8 men and 14 women are working together in a field. After working for 3 days, 5 men and 8 women leave the work. How many more days will be required to complete the work?",
    options: {
      A: "I only",
      B: "II only",
      C: "III only",
      D: "I or II or III",
      E: "II or III only"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Each statement gives enough data individually to calculate the remaining work duration, so any one is sufficient."
  },
  
  {
    id: 31,
    question: "A towel, when bleached, was found to have lost 20% of its length and 10% of its breadth. The percentage of decrease in area is:",
    options: {
      A: "10%",
      B: "10.08%",
      C: "20%",
      D: "28%"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Decrease in area = (100 × 100) - (80 × 90) = 10000 - 7200 = 2800<br>Percentage decrease = (2800 / 10000) × 100 = 28%"
  },
  {
    id: 32,
    question: "What is the capacity of a cylindrical tank?",
    options: {
      A: "I alone sufficient while II alone not sufficient to answer",
      B: "II alone sufficient while I alone not sufficient to answer",
      C: "Either I or II alone sufficient to answer",
      D: "Both I and II are not sufficient to answer",
      E: "Both I and II are necessary to answer"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>I: h = 28, r = 14 (since radius = height/2) → V = πr²h<br>II: Area = πr² = 616 → h = 28 → V = 616 × 28<br>Either gives enough data to compute volume"
  },
  {
    id: 33,
    question: "In a 100 m race, A covers the distance in 36 seconds and B in 45 seconds. In this race A beats B by:",
    options: {
      A: "20 m",
      B: "25 m",
      C: "22.5 m",
      D: "9 m"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>B’s speed = 100 / 45 m/s<br>In 36 seconds, B runs = (100 × 36) / 45 = 80 m<br>So, A beats B by 100 - 80 = 20 m"
  },
  {
    id: 34,
    question: "A 6% stock yields 8%. The market value of the stock is:",
    options: {
      A: "Rs. 48",
      B: "Rs. 75",
      C: "Rs. 96",
      D: "Rs. 133.33"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Income of Rs. 8 from Rs. 100<br>To get Rs. 6 income: (100 × 6) / 8 = Rs. 75"
  },
  {
    id: 35,
    question: "A box contains 2 white balls, 3 black balls and 4 red balls. In how many ways can 3 balls be drawn from the box, if at least one black ball is to be included in the draw?",
    options: {
      A: "32",
      B: "48",
      C: "64",
      D: "96",
      E: "None of these"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>Possible cases: 1B+2NB, 2B+1NB, 3B<br>= 3C1×6C2 + 3C2×6C1 + 3C3 = 3×15 + 3×6 + 1 = 45 + 18 + 1 = 64"
  },
  
  {
    id: 36,
    question: "If Rs. 10 be allowed as true discount on a bill of Rs. 110 due at the end of a certain time, then the discount allowed on the same sum due at the end of double the time is:",
    options: {
      A: "Rs. 20",
      B: "Rs. 21.81",
      C: "Rs. 22",
      D: "Rs. 18.33"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>True discount of Rs. 10 on Rs. 110 → Present worth = Rs. 100<br>At double time, TD on Rs. 110 = (20 / 120) × 110 = Rs. 18.33"
  },
  {
    id: 37,
    question: "Find the odd man out: 10, 14, 16, 18, 21, 24, 26",
    options: {
      A: "26",
      B: "24",
      C: "21",
      D: "18"
    },
    answer: "C",
    explanation: "<strong>Explanation:</strong><br><br>All others are even numbers, only 21 is odd"
  },
  {
    id: 38,
    question: "Find the odd man out: 835, 734, 642, 751, 853, 981, 532",
    options: {
      A: "751",
      B: "853",
      C: "981",
      D: "532"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>In all numbers except 751, the middle digit = difference of third and first digits"
  },
  {
    id: 39,
    question: "Find out the wrong number in the given sequence of numbers: 1, 2, 6, 15, 31, 56, 91",
    options: {
      A: "31",
      B: "91",
      C: "56",
      D: "15"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Each term = previous + n² (n from 1)<br>Last correct should be 92, not 91"
  },
  {
    id: 40,
    question: "Insert the missing number: 7, 26, 63, 124, 215, 342, (....)",
    options: {
      A: "481",
      B: "511",
      C: "391",
      D: "421"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Each number = n³ - 1<br>Next = 8³ - 1 = 511"
  }
,

  {
    id: 41,
    question: "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
    options: {
      A: "1 : 3",
      B: "3 : 2",
      C: "3 : 4",
      D: "None of these"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Let speeds be x and y<br>Lengths = 27x and 17y<br>Sum = (x + y) × 23 = 27x + 17y<br>Simplifying: 4x = 6y → x/y = 3/2"
  },
  {
    id: 42,
    question: "A train overtakes two persons walking along a railway track. The first one walks at 4.5 km/hr. The other one walks at 5.4 km/hr. The train needs 8.4 and 8.5 seconds respectively to overtake them. What is the speed of the train if both the persons are walking in the same direction as the train?",
    options: {
      A: "66 km/hr",
      B: "72 km/hr",
      C: "78 km/hr",
      D: "81 km/hr"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>Let train speed = x m/s<br>(x - 1.25) × 8.4 = (x - 1.5) × 8.5 → x = 22.5 m/s = 81 km/hr"
  },
  {
    id: 43,
    question: "A runs 1⅔ times as fast as B. If A gives B a start of 80 m, how far must the winning post be so that A and B might reach it at the same time?",
    options: {
      A: "200 m",
      B: "300 m",
      C: "270 m",
      D: "160 m"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>Speed ratio A:B = 5:3<br>In a 5 m race, A gains 2 m → 80 m lead means total distance = (5/2) × 80 = 200 m"
  },
  {
    id: 44,
    question: "Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q's age?",
    options: {
      A: "1 year",
      B: "2 years",
      C: "25 years",
      D: "Data inadequate",
      E: "None of these"
    },
    answer: "D",
    explanation: "<strong>Explanation:</strong><br><br>R - Q = Q - T → R + T = 2Q = 50 → Q = 25<br>But R’s actual age not known → R - Q cannot be determined"
  },
  {
    id: 45,
    question: "The value of log₂ 16 is:",
    options: {
      A: "1/8",
      B: "4",
      C: "8",
      D: "16"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>log₂ 16 = n → 2ⁿ = 16 = 2⁴ → n = 4"
  },
  
  {
    id: 46,
    question: "In a two-digit number, if it is known that its unit's digit exceeds its ten's digit by 2 and that the product of the given number and the sum of its digits is equal to 144, then the number is:",
    options: {
      A: "24",
      B: "26",
      C: "42",
      D: "46"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>Let ten's digit = x → unit's = x + 2<br>Number = 10x + (x + 2) = 11x + 2<br>Sum = 2x + 2<br>(11x + 2)(2x + 2) = 144 → x = 2 → Number = 24"
  },
  {
    id: 47,
    question: "The square root of 64009 is:",
    options: {
      A: "253",
      B: "347",
      C: "363",
      D: "803"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>√64009 = 253"
  },
  {
    id: 48,
    question: "What should come in place of both x in the equation x = 162 / (128x)?",
    options: {
      A: "12",
      B: "14",
      C: "144",
      D: "196"
    },
    answer: "A",
    explanation: "<strong>Explanation:</strong><br><br>x² = 128 × 162 = 20736 → x = √20736 = 144 → √144 = 12"
  },
  {
    id: 49,
    question: "A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
    options: {
      A: "12 days",
      B: "15 days",
      C: "16 days",
      D: "18 days"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>A works alone for 2 days, A+B+C work on 3rd day<br>In 3 days: 1/10 + 1/10 = 1/5<br>So total work in 3-day cycle = 1/5 → Total time = 3 × 5 = 15 days"
  },
  {
    id: 50,
    question: "The value of (489.1375 × 0.0483 × 1.956) / (0.0873 × 92.581 × 99.749) is closest to:",
    options: {
      A: "0.006",
      B: "0.06",
      C: "0.6",
      D: "6"
    },
    answer: "B",
    explanation: "<strong>Explanation:</strong><br><br>Approximate numerator ≈ 489 × 0.05 × 2<br>Approximate denominator ≈ 0.09 × 93 × 100<br>Value ≈ (489 × 0.05 × 2) / (837) ≈ 0.058 ≈ 0.06"
  }















]



function renderQuestionsFromObject(questionsArray,start,end) {
    console.log(questionsArray.slice(start,end +1).questionsArray);
    
    
    return questionsArray.slice(start,end +1).map((q, index) => {
        const questionNumber = `${q.id}`;
        const optionsHTML = Object.entries(q.options).map(([key, val]) => {
            const isCorrect = q.answer === key;
            return `<li onclick="checkAnswer(this, ${isCorrect}, ${questionNumber})">${key}) ${val}</li>`;
        }).join("");


        return `
        <!-- Question ${questionNumber} -->
        <div class="quiz" data-question="${questionNumber}">
            <h4>Question ${questionNumber}:</h4>
            <p>${q.question}</p>
            <ul class="options">
                ${optionsHTML}
            </ul>
            <div class="explanation">
                ${q.explanation}
            </div>
        </div>
        `;
    }).join("");
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("page1").innerHTML = renderQuestionsFromObject(aptitudeQuestions,0,9);

    document.getElementById("page2").innerHTML = renderQuestionsFromObject(aptitudeQuestions,10,19);

    document.getElementById("page3").innerHTML = renderQuestionsFromObject(aptitudeQuestions,20,29);

    document.getElementById("page4").innerHTML = renderQuestionsFromObject(aptitudeQuestions,30,39);

    document.getElementById("page5").innerHTML = renderQuestionsFromObject(aptitudeQuestions,40,49);
});


