from fastapi import APIRouter
from pydantic import BaseModel

from services.ai_service import get_ai_response

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):
    try:
        answer = get_ai_response(request.message)
        return {"answer": answer}
    except Exception as e:
        return {"answer": f"Error: {str(e)}"}