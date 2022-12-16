# @version ^0.3.7

@external
def test():
    print("DEBUG something here!!!", hardhat_compat=True)

    x: uint256 = 123
    y: uint256 = 456
    print("DEBUG something here!!!", x, y, hardhat_compat=True)