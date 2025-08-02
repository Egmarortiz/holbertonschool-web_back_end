#!/usr/bin/python3
import asyncio

async def delayed_numbers():
    for i in range(3):
        await asyncio.sleep(1)
        yield i

async def main():
    result = [x async for x in delayed_numbers()]
    print(result)

asyncio.run(main())

