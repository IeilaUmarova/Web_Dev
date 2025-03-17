#WARMUP_1
#diff21
def diff21(n):
    d = 21 - n
    if n  > 21:
        return abs(d)*2
    else:
        return abs(d)
    
#front_back
def front_back(str):
    if len(str) <=1:
        return str
    middle = str[1: len(str)-1]
    return str[-1] + middle + str[0]

#front3
def front3(str):
    if len(str) <= 3:
        return str * 3
    else:
        return str[:3] * 3
    
#makes10
def makes10(a, b):
    return a==10 or b == 10 or a+b ==10

#missing_char
def missing_char(str, n):
    part1 = str[:n]
    part2 = str[n+1:]
    return part1 + part2

#monkey_trouble
def monkey_trouble(a_smile, b_smile):
    if a_smile and b_smile is True:
        return True
    elif not a_smile and not b_smile is True:
        return True
    else:
        return False

#near_hundred
def near_hundred(n):
    return 90 <= n <=110 or 190 <= n <= 210

#not_string
def not_string(str):
    if not str.startswith("not"):
        return "not " + str
    else:
        return str

#parrot_trouble
def parrot_trouble(talking, hour):
    return (talking and  (hour  < 7 or hour > 20 ))

#pos_neg
def pos_neg(a, b, negative):
    if negative is True and not (a < 0 and b <0):
        return False
    elif negative is True and (a < 0 and b <0):
        return True
    else:
        return (a < 0 and b > 0) or (a > 0 and b < 0)

#sleep_in
def sleep_in(weekday, vacation):
    if vacation == True:
        return True
    else:
        if weekday == True:
            return False
        else:
            return True

#sum_double
def sum_double(a, b):
    if a == b:
        return (a+b)*2
    else:
        return a+b
    

#WARMUP_2
#array_count9
def array_count9(nums):
    return nums.count(9)

#array_front9
def array_front9(nums):
    if len(nums) <= 4:
        return 9 in nums
    else:
        return 9 in nums[:4]

#array123
def array123(nums):
    for i in range(len(nums)-2):
        if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
            return True
    return False

#front_times
def front_times(str, n):
    if len(str) <= 3:
        return str * n
    else:
        return str[:3] * n

#last2
def last2(str):
    if len(str) < 2:
        return 0
    last2 = str[len(str)-2:]
    count = 0
    for i in range(len(str)-2):
        sub = str[i:i+2]
        if sub == last2:
            count += 1
    return count

#string_bits
def string_bits(str):
    result = ''
    for i in range(len(str)):
        if i % 2 == 0:
            result += str[i]
    return result

#string_match
def string_match(a, b):
    shorter = min(len(a), len(b))
    count = 0
  
    for i in range(shorter-1):
        a_sub = a[i:i+2]
        b_sub = b[i:i+2]
    
    if a_sub == b_sub:
        count += 1
    return count

#string_splosion
def string_splosion(str):
    result = ''
    for i in range(len(str)+1):
        result += str[:i]
    return result

#string_times
def string_times(str, n):
    return str*n


#STRING_1
#combo_string
def combo_string(a, b):
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a

#extra_end
def extra_end(str):
    return (str[-2] + str[-1]) * 3

#first_half
def first_half(str):
    h = len(str) / 2
    return str[: h]

#first_two
def first_two(str):
    if len(str) <= 2:
        return str
    else:
        return str[0] + str[1]

#hello_name
def hello_name(name):
    s = "Hello " + name + "!"
    return s

#left2
def left2(str):
    return str[2:] + str[:2]

#make_abba
def make_abba(a, b):
    return a + b * 2 + a

#make_out_word
def make_out_word(out, word):
    return out[0] + out[1] + word + out[2] + out[3]

#make_tags
def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"

#non_start
def non_start(a, b):
    return a[1:] + b[1:]

#without_end
def without_end(str):
    return str[1 : -1]


#STRING_2
#cat_dog
def cat_dog(str):
    cat = 0
    dog = 0
    for i in range(0, len(str)-1):
        if str[i:i+3] == "cat":
            cat += 1
        if str[i:i+3] == "dog":
            dog += 1
    return cat == dog

#count_code
def count_code(str):
    alp = "abcdefghijklmnopqersuvwxuz"
    sum = 0
    for c in alp:
        d  = "co" + c + "e"
    
        for i in range(len(str)-1):
            if str[i:i+4] == d:
                sum += 1
                
    return sum

#count_hi
def count_hi(str):
    sum = 0
    for i in range(len(str)-1):
        if str[i:i+2] == 'hi':
            sum += 1
    return sum

#double_char
def double_char(str):
    str1 = ""
    for c in str:
        str1 += c*2
    return str1

#end_other
def end_other(a, b):
    a = a.lower()
    b = b.lower()
    a1 = len(a)
    b1 = len(b)
    
    if a1 == b1 and a == b:
        return True
    elif a1 > b1:
        return a.endswith(b)
    else:
        return b.endswith(a)

#xyz_there
def xyz_there(str):
    if str.startswith('xyz'):
        return True
    
    for i in range (len(str)):
        if str[i-1] != '.' and str[i:i+3] == 'xyz':
            return True
    return False


#LOGIC_1
#alarm_clock
def alarm_clock(day, vacation):
    if vacation:
        if day == 0 or day == 6:
            return "off"
        return "10:00"
    else:
        if day == 0 or day == 6:
            return "10:00"
    return "7:00"

#caught_speeding
def caught_speeding(speed, is_birthday):
    if is_birthday:
        if speed <= 65:
            return 0
        elif 66 <= speed <= 85:
            return 1
        else:
            return 2         
    else:
        if speed <= 60:
            return 0
        elif 61 <= speed <= 80:
            return 1
        else:
            return 2

#cigar_party
def cigar_party(cigars, is_weekend):
    return cigars >= 40 and cigars <= 60 or is_weekend and cigars > 60

#date_fashion
def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    return 1

#in1to10
def in1to10(n, outside_mode):
    if outside_mode:
        return n <= 1 or n >= 10
    return 1 <= n <= 10

#love6
def love6(a, b):
    if a == 6 or b == 6:
        return True
    elif a+b == 6 or abs(a-b) == 6:
        return True
    else:
        return False

#near_ten
def near_ten(num):
    return (num % 10) <= 2 or (num % 10 ) >= 8

#sorta_sum
def sorta_sum(a, b):
    total_sum = a + b
    if 10 <= total_sum <= 19:
        return 20
    
    return total_sum

#squirrel_play
def squirrel_play(temp, is_summer):
    if is_summer:
        return 60 <= temp <= 100
    return 60 <= temp <= 90


#LOGIC_2
#close_far
def close_far(a, b, c):
    if abs(a-b) <= 1:
        if abs(a-c) >= 2 and abs(b-c) >= 2:
            return True
  
    if abs(a-c) <= 1:
        if abs(a-b) >= 2 and abs(b-c) >= 2:
            return True
    
    return False

#lone_sum
def lone_sum(a, b, c):
    if a== b == c:
        return 0
    elif a == b:
        return c
    elif b == c:
        return a
    elif a == c:
        return b
    else:
        return a+b+c

#lucky_sum
def lucky_sum(a, b, c):
    if a == 13:
        return 0
    elif b == 13:
        return a
    elif c == 13:
        return a+b
    else:
        return a+b+c

#make_bricks
def make_bricks(small, big, goal):
    if goal >= big*5:
        remainder = goal - (big * 5)
    else:
        remainder = goal % 5

    if small >= remainder:
        return True
        
    return False

#make_chocolate
def make_chocolate(small, big, goal):
    big_bar = 5 * big
    if goal >= big_bar:
		    remainder = goal - big_bar
	else:
		    remainder = goal % 5
	if remainder <= small:
		    return remainder

	    return -1

#no_teen_sum
def no_teen_sum(a, b, c):
    
    def fix_teen(n):
        if 13 <= n <= 19 and n != 15 and n != 16:
            return 0
    return n
    return fix_teen(a) + fix_teen(b) + fix_teen(c)

#round_sum
def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)
  
def round10(n):
    if n % 10 >= 5:
        return n + (10 - n % 10)
    return n - (n % 10)


#LIST_1
#common_end
def common_end(a, b):
    return (len(a) and len(b) >= 1 and a == b or a[0] == b[0] or a[-1] == b[-1])

#first_last6
def first_last6(nums):
    return(nums[0] == 6 or nums[-1] == 6)

#has23
def has23(nums):
    return 2 == nums[0] or 2 == nums[1] or 3 == nums[0] or 3 == nums[1]

#make_ends
def make_ends(nums):
    return [nums[0], nums[-1]]

#make_pi
def make_pi():
    return [3, 1, 4]

#max_end3
def max_end3(nums):
    if nums[0] > nums[2]:
        return [nums[0], nums[0], nums[0]]
    else:
        return [nums[2], nums[2], nums[2]]

#middle_way
def middle_way(a, b):
    return [a[1], b[1]]

#reverse3
def reverse3(nums):
    return [nums[2], nums[1], nums[0]]

#rotate_left3
def rotate_left3(nums):
    return [nums[1], nums[2], nums[0]]

#same_first_last
def same_first_last(nums):
    return (len(nums) >= 1 and nums[0] == nums[-1])

#sum2
def sum2(nums):
    if len(nums) < 2:
        return sum(nums)
    else:
        return nums[0]+nums[1]

#sum3
def sum3(nums):
    return (nums[0] + nums[1] + nums[2])


#LIST_2
#big_diff
def big_diff(nums):
    return max(nums) - min(nums)

#centered_average
def centered_average(nums):
    nums.sort()
    li = nums[1:-1]
    return sum(li)//len(li)

#count_evens
def count_evens(nums):
    sum = 0
    for i in nums:
        if i % 2 == 0:
            sum += 1
    return sum

#has22
def has22(nums):
    for i in range(len(nums)-1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False

#sum13
def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 1
        else:
            total += nums[i]
        i += 1
    return total

#sum67
def sum67(nums):
    total = 0
    is6 = False
  
    for i in range(len(nums)):
        if nums[i] == 6:
            is6 = True
        if not is6:
            total += nums[i]
        if nums[i] == 7 and is6:
            is6 = False
    return total