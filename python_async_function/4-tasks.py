#!/usr/bin/env python3
"""Execute multiple asyncio tasks concurrently"""
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list[float]:
    """Run task_wait_random n times concurrently and return sorted list of results."""
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)
