def nthTerm(cls, input1, input2, input3):
    r = input2/input1
    a = input1/r

    if input2 == input1:
        return round(input3*input1, 3)
    elif r > 1:
        return round(a*((pow(r, input3)-1)/(r-1)), 3)
    else:
        return round(a*((1-pow(r, input3))/(1-r)), 3)


print("wtihin the fun")
